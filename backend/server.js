const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =========================
// MySQL Connection Pool
// =========================

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  ssl: {
    rejectUnauthorized: false,
  },

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// =========================
// Test Database Connection
// =========================

async function testDatabase() {
  try {
    const connection = await db.getConnection();

    console.log("MySQL/Aiven Connected Successfully");

    connection.release();
  } catch (error) {
    console.error("MySQL Connection Error:", error.message);
  }
}

testDatabase();

// =========================
// Home Route
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Adefam backend is running successfully!",
  });
});

// =========================
// SIGNUP
// =========================

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required.",
      });
    }

    // Check if user already exists
    const [existingUsers] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await db.query(
      "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    console.log("New user created:", result.insertId);

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      userId: result.insertId,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Signup failed.",
    });
  }
});

// =========================
// LOGIN
// =========================

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const [users] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const user = users[0];

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password.",
      });
    }

    return res.json({
      success: true,
      message: "Login successful.",
      user: {
        id: user.id,
        name: user.fullname,
        email: user.email,
        profileImage: user.profile_image || "",
      },
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Login failed.",
    });
  }
});

// =========================
// SERVER
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Adefam backend running on port ${PORT}`);
});