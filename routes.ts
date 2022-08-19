const { unless } = require("express-unless");
import express, { Request, Response } from "express";
import { overwriteFile, getMetaData, extensionsExceptions } from "./utils";

const app = express();
const staticExpress: any = express.static(__dirname);
staticExpress.unless = unless;

app.use(staticExpress.unless({ ext: extensionsExceptions }));

app.use("/*", async (req: Request, res: Response) => {
  const params = req.params[0].split("/");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const meta = await getMetaData(params, res);

  if (meta) {
    overwriteFile(res, meta);
  }
});

export default app;
