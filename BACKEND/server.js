import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("You are in note 400 API");
  });
app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');   
});