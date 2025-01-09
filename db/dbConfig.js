const { Pool } = require('pg');
require('dotenv').config(); // Ensure dotenv is loaded

// Create a PostgreSQL connection pool using the connection string from the .env file
const dbconnection = new Pool({
  connectionString: process.env.DATABASE_URL, // Using the connection string from the .env file
  ssl: {
    rejectUnauthorized: false, // SSL is required for connections to Neon and similar services
  },
});

// Export the database connection (uses promises by default with Pool)
module.exports = dbconnection;






// local coonection on mysql2


// const mysql2 = require('mysql2');

// const dbconnection = mysql2.createPool({
// user:process.env.USER,  
// database:process.env.DATA_BASE,
// host:"localhost",
// password:process.env.PASSWORD,
//     connectionLimit: 10
// })

// // check the connection b/n dotenv & dbConfig first require dotenv with config @ app.js
// console.log(process.env.JWT_SECRET);


// // when we insert data for  register,answer,question....will happen call backheal so we should turn to PROMISE based
// // dbconnection.execute( "select 'test' ", (err,result)=> {

// //     if(err) {
// //         console.log(err.message);
// //     }else{
// //         console.log(result);

// //     }
// // })


// module.exports = dbconnection.promise(); 










