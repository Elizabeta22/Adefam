const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Il0vecooking",
    database: "adefam"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql =
        "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], async (err, result) => {

        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const valid = await bcrypt.compare(
            password,
            result[0].password
        );

        if (!valid) {
           return res.status(401).json({
                message: "Incorrect password"
});
        }

        res.json({
    success: true,
    user: {
        id: result[0].id,
        name: result[0].fullname,
        email: result[0].email,
        profileImage: result[0].profile_image,
    },
});

    });

});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = result[0];

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.fullname,
        email: user.email,
        profileImage: user.profile_image,
      },
    });
  });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});



app.post("/signup", async (req, res) => {

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
        "INSERT INTO users(fullname,email,password) VALUES(?,?,?)";

    db.query(
        sql,
        [name, email, hashedPassword],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "User created successfully"
            });

        }
    );

});