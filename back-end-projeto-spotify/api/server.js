import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/", (req, res) => {
  res.send("Endpoints '/artists' & '/songs'");
});

app.get("/api/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.use(
  express.static(path.join(__dirname, "../front-end-projeto-spotify/dist"))
);

app.get("*", async (req, res) => {
  res.sendFile(
    path.join(__dirname, "../front-end-projeto-spotify/dist/index.html")
  );
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});

export default app;
