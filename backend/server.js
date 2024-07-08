import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/students.js";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

dotenv.config();

connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qwcp4tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  {
    dbName: "StudentDB",
  }
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
