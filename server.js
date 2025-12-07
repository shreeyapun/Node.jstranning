// 

// What is Express.js?

// A minimal and flexible Node.js framework used to build web servers and APIs.
// It simplifies tasks like routing, handling requests, sending responses, and managing middleware.

// Key points:

// Built on top of Node.js
// Lightweight
// Fast development
// Easy to scale and maintain

// Why Use Express.js?

// Reduces boilerplate code compared to raw Node.js http module
// Better routing system
// Middleware support (logging, authentication, validation, etc.)
// Large ecosystem of third-party packages
// Easy integration with databases and frontend frameworks

// Installing Express.js (Setup)

// npm install
// npm install nodemon --save-dev

// Step 1: Initialize npm
// npm init -y

// Step 2: Install Express.js
// npm install express
// npm install dotenv

// Step 3: Install nodemon for development
// npm install nodemon --save-dev


// Creating a Basic Express Server

// const express = require("express");
// require("dotenv").config();

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Server running...");
// });


// Basic Routing in Express.js
// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact form submitted");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




// Middleware in Express.js

// Middleware functions are functions that have access to the request object (req),
//  the response object (res), and the next middleware function in the 
// application request-response cycle. They can perform tasks like logging, 
// authentication, parsing request bodies, etc.

// Middleware can be application-level or router-level.

// Middleware can be used for:
// Logging requests
// Parsing request bodies
// Handling authentication
// Serving static files
// Error handling

// Example of Middleware

// const express = require("express");
// const app = express();

// // Middleware to log requests
// app.use((req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   next(); // Pass control to the next middleware function
// });

// // Route handler
// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });



// const express = require("express");
// const app = express();
// const port = 5000;

// // To read JSON body (Postman raw -> JSON)
// app.use(express.json());

// // To read form data (Postman x-www-form-urlencoded)
// app.use(express.urlencoded({ extended: true }));

// // POST Route
// app.post("/contact", (req, res) => {
//   const { name, email } =req.body;
  
//   res.send({
//     message: "Data received successfully",
//     name: name,
//     email: email
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


 // GET Request with Query Params and URL Params
 const express = require("express");
const { compareBuild } = require("semver");
 const app = express();
 const port = 5000;
 
 // Simple GET
 app.get("/info", (req, res) => {
   res.send("Server is running.");
 });

 // GET with Query Params
 app.get("/user", (req, res) => {
   const { name, age } = req.query;
 
   res.send(
     `Query Received\nName: ${name}\nAge: ${age}`
   );
 });

 // GET with URL Params
 app.get("/product/:id", (req, res) => {
   const productId = req.params.id;
 
   res.send(
     `Product ID Received: ${productId}`
   );
 });

 // Start server
 app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
 });

//  \n means line break garnne
// get and post http method
// http means server sagga interact garne...

// crud : create,read,update,delete;

