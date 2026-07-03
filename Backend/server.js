require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({}));

const { handleAnswer,trackInfo } = require("./controllers/ai.controllers");

app.post("/api/answer", handleAnswer);
app.post("/api/facts", trackInfo);

app.listen(3000, () => {
    console.log(`App is Listening at 3000`);
});

