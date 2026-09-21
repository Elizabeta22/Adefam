const allowedOrigins = [
  "http://localhost:5173",
  "https://adefam-cf4t-xi.vercel.app",
  "https://adefam-cf4t-r86ktyu7b-adefam1.vercel.app",
  
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked CORS origin:", origin);
      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);