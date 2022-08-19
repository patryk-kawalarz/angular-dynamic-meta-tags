import express from "express";
import routes from "./routes";
import { extensionsExceptions } from "./utils";
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/",
  express.static("./", {
    extensions: extensionsExceptions,
    index: false,
  })
);
app.use("/", routes);
app.listen(3000);
