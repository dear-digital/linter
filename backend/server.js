// app.js
//const express = require("express");
import express from 'express'
import cors from 'cors'
const app = express();

//const jsonString = '{"name": "John", "age": 30, "city": "New York"}';


/* try {
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);
    res.send(jsonObject)
  
  const formattedJsonString = JSON.stringify(jsonObject, null, 2);
  console.log(formattedJsonString);
} catch (error) {
  console.error("Invalid JSON:", error.message);
} */


app.use(express.json());
app.use(cors()); // Allow all CORS requests, you can configure more specific options if needed.

app.get("/", (req, res) => {
  res.json("Server started");
});


app.post("/format-json", (req, res) => {
  const jsonString = req.body.jsonString;

    try {
      // Parsing and validating JSON
      const jsonObject = JSON.parse(jsonString);

      // Reformatting JSON (pretty-print)
      const formattedJson = JSON.stringify(jsonObject, null, 2);
    
      // Send the formatted JSON object directly, not as a string
      res.json({ formattedJson });
    
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ error: "Invalid JSON", errorMessage: error.message  });
  }
});

/* app.post("/format-json", (req, res) => {
  const jsonString = req.body.jsonString;

  try {
    // Parsing and validating JSON
    const jsonObject = JSON.parse(jsonString);

    // Reformatting JSON (pretty-print)
    const formattedJson = JSON.stringify(jsonObject, null, 2);

    // Send the formatted JSON object directly, not as a string
    res.json({ formattedJson });
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message); // Send the error message directly
  }
}); */



// Set up your API endpoints or routes here

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
