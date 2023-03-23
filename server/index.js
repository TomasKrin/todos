require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

const client = new MongoClient(URI);

// (127.0.0.1:8080) yra atmaina (localhost:8080)

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("TODOS").collection("todos").find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/", async (req, res) => {
  try {
    if (req.body.title) {
      const con = await client.connect();
      const data = await con.db("TODOS").collection("todos").insertOne({
        title: req.body.title,
      });
      await con.close();
      res.send(data);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(PORT, () => {
  console.log(`It works on ${PORT} port`);
});
