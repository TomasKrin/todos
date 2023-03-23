const express = require("express");
const cors = require("cors");

const app = express();

// (127.0.0.1:8080) yra atmaina (localhost:8080)

const port = 8080;
app.use(cors());
app.use(express.json());

const todos = [
  {
    id: 1,
    title: "Gerai pailsėti",
  },
];

app.get("/", async (req, res) => {
  res.send(todos);
});

app.post("/", async (req, res) => {
  // {title: 'Do Homework'} => {id: 5123, title: 'Do Homework'}
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  res.send(newTodo);
});

app.listen(port, () => {
  console.log(`It works on ${port} port`);
});
