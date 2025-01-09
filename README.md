## Contact
My name is Abdurahman Mohammed, and I am a full-stack web developer. I learned at Evangadi Tech.
If you have any questions, need help, or want to discuss work or learning opportunities related to this project, feel free to reach out to me:

- **Phone:** 215-934-67-71-72
- **Phone:** 215-912-64-96-90

- **Email:** abdumk148@gmail.com

I am  willing to help and collaborate on this project.



# Evangadi Forum

This is a forum application built with Node.js, Express, and PostgreSQL. It allows users to register, log in, post questions, and provide answers to questions.

## Project Structure

.env .gitignore app.js controller/ answerController.js questionController.js userController.js db/ dbConfig.js middleware/ authMiddleware.js package.json routes/ answerRoute.js questionRoute.js userRoute.js


## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>

   2 Navigate to the project directory:
   cd evangadi-forum
   
   3 Install the dependencies
   npm install

   4 Create a .env file in the root directory and add your environment variables
   JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url

Usage
1 Start the server
node app.js
2 The server will run on http://localhost:3004.
API Endpoints
User Routes

API Endpoints

User Routes
POST /api/users/register - Register a new user
POST /api/users/login - Log in a user
GET /api/users/check - Check user authentication (protected route)
Question Routes

Question Routes
GET /api/question - Get all questions
GET /api/question/:question_id - Get a single question and its answers
POST /api/question - Post a new question


Answer Routes
GET /api/answer/:question_id - Get answers for a question
POST /api/answer - Post an answer for a question

