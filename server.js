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
//  const express = require("express");
// const { compareBuild } = require("semver");
//  const app = express();
//  const port = 5000;
 
//  // Simple GET
//  app.get("/info", (req, res) => {
//    res.send("Server is running.");
//  });

//  // GET with Query Params
//  app.get("/user", (req, res) => {
//    const { name, age } = req.query;
 
//    res.send(
//      `Query Received\nName: ${name}\nAge: ${age}`
//    );
//  });

//  // GET with URL Params
//  app.get("/product/:id", (req, res) => {
//    const productId = req.params.id;
 
//    res.send(
//      `Product ID Received: ${productId}`
//    );
//  });

//  // Start server
//  app.listen(port, () => {
//    console.log(`Server running at http://localhost:${port}`);
//  });

//  \n means line break garnne
// get and post http method
// http means server sagga interact garne...

// crud : create,read,update,delete;

// advanced routing in expressJS
// ADVANCED ROUTING meaans creating cleaner, modular, and more flexible routes using route
// parameters,query params, and express .routers();
// const express= require("express");
// const app =express();
// // parse JSon ( not needed for this route but good practice)
// app.use(express.json());



// // route parameter example
// app.get("/user/:id",(req,res)=>{
//   const userId=req.params.id;
//   res.send(`user id  requested:${userId}`);
// });

// // start server
// app.listen(5000,()=>{
//   console.log("server running on http://localhost:5000");
// });

// middleware inn expressJS
// middleware= a function that runs between request and response
// used for :logging , authentication,validation,parsing,errors etc

// /type of middleware
// 1. application level middleware: run for every request in the whole app.
// 2.  custom middleware : create your own function to perform some task
// 3. route-level and app-level middleware: run only for specific route (not global)
// 4. error-handling middleware : Catch error in your app and handle in one place



// moss
// brocode
 

//   let a =10;
//   const  b =20;
//   var c = 30;

// function test (){
//   let a =10;
//   const  b =20;
//   var c = 30;
// }
//  test();
//  console.log(a);
//  console.log(b);
//  console.log(c);


// const express= require("express");
// const app=express();

// // simple middleware
// app.use((req,res,next)=>{
//     console.log("middleware works!");
//     next();
// });
//  app.get("/",(req,res)=>{
//     res.send("hello from express!");
//  });
//  app.listen(5000,()=>{
//     console.log("server started at http://localhost:5000");
//  });  

// const express = require("express");
// const app= express();
// // custom middleware
//  function middleware(req,res,next){
//    console.log("this is my middleware");
//    next();
//  }
//  app.use(middleware);
//  app.get("/",(req,res)=>{
//    res.send("home page");
//  })
//  app.listen(5000,()=>{
//    console.log("server started at http://localhost:5000");
//  });

//  Error handling middleware
// error handling middleware is used to catch and handle errors in express
// so that server doesnot crash and the user get a proper message.

// uses
// prevent server from crashing when an error comes
// sends a proper and user-friendly error message to the client
// handles all error from one central place
// helps in debugging by loging error details
// improves application security by hiding internal errors.
// allowas sending correct HTTP status codes(400,500,etc)


// commonly used HTTTP status codes:

// 200:ok -request successful
// 201:created-resource created successfully
// 400:bad request-invalid request
// 401:unauthorized-authentization required
// 403:forbidden-access denied
// 404:not found -resource not found
// 500:internal server error-serveer error
// 503: service unavailable-server overload or down


// example of error handling middleware
// const express = require ("express");
// const app=express();

// app.get("/",(req,res,next)=>{
//   const error =new Error ("something went wrong");
//   next(error);
// });

// app.use((err,req,res,next)=>{
//   console.log("error:",err.message);
//   res.send("error occurred");
// });
// app.listen(5000,()=>{
//   console.log("server started at http://localhost:5000");
// });
// const express = require ("express");
// const app=express();

// app.get("/",(req,res,next)=>{
//   next("something went wrong");
// });

// app.use((err,req,res,next)=>{
//   console.log("error:",err);
//   res.send("error occurred");
// });
// app.listen(5000,()=>{
//   console.log("server started at http://localhost:5000");
// });



// example of async and await middleware;
const express=require ("express");
const app = express();

app.use(async(req,res,next)=>{
  console.log("middleware started");
  await console.log("waiting task done");
  next();
});
app.get("/",(req,res)=>{
  res.send("hello  BCA std");
});
app.listen(5000,()=>{
  console.log("server started ");
});


