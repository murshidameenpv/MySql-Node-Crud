import express from "express";
import cors from "cors";
import db from './src/db/db.js'
import userRoute from "./src/routes/userRoute.js";
const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", userRoute);
app.listen(port, () =>
  console.log(`Server connected  http://localhost:${port}`)
);
