import express from 'express';

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.json("Server started");
});


app.post("/api-local/format-json", (req, res) => {
  const jsonString = req.body.jsonString;

  try {
    // Parsing and validating JSON
    const jsonObject = JSON.parse(jsonString);

    // Reformatting JSON (pretty-print)
    const formattedJson = JSON.stringify(jsonObject, null, 2);

    // Send the formatted JSON object directly, not as a string
    res.json({ formattedJson });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Invalid JSON", errorMessage: error.message });
  }
});


const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
