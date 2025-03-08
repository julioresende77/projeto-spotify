import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Endpoints '/artists' & '/songs'");
});

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});

export default app;