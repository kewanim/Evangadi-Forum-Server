const express = require('express');
require('dotenv').config();
const { Client } = require('pg'); // Import PostgreSQL client
const cors = require('cors');

dbconnection = require('./db/dbConfig');

const app = express();
const port = 3004;

// PostgreSQL Database Connection
   dbconnection = new Client({
  connectionString: process.env.DATABASE_URL, // Use connection string from .env
  ssl: {
    rejectUnauthorized: false, // Required for Neon
  },
});

// Establish Database Connection
async function connectDB() {
  try {
    await dbconnection.connect();
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); // Exit the app if the database connection fails
  }
}

// Middleware for CORS
app.use(
  cors({
    origin: true,

  })
);

// Middleware to parse JSON
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoute');
const questionRoutes = require('./routes/questionRoute');
const answerRoutes = require('./routes/answerRoute');

app.use('/api/users', userRoutes);
app.use('/api', questionRoutes);
app.use('/api', answerRoutes);

// Sample route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Start Server
async function startServer() {
  try {
    await connectDB(); // Ensure database is connected before starting the server

    // Test query to verify database connection
    const result = await dbconnection.query("SELECT 'Database connected!' AS message");
    console.log(result.rows[0].message);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error.message);
  }
}

startServer();


