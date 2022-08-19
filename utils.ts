const fs = require("fs");
const es = require("event-stream");
import { Response } from "express";

interface Meta {
  title: string;
  desc: string;
  image: string;
  favicon: string;
}

export const extensionsExceptions = ["js", "ico", "css", "png"];

export const overwriteFile = (res: Response, meta: Meta): void => {
  const stream = fs
    .createReadStream("dist/index1.html")
    .pipe(es.split())
    .pipe(
      es.mapSync((line: any) => {
        stream.pause();
        line = line.toString().replace("[[title]]", meta.title);
        line = line.toString().replace("[[description]]", meta.desc);
        line = line.toString().replace("[[image]]", meta.image);
        line = line.toString().replace("favicon.ico", meta.favicon);

        res.write(line);
        stream.resume();
      })
    );

  stream.pipe(res);
};

export const getMetaData = async (
  params: string[],
  res: Response
): Promise<Meta> => {
  return Promise.resolve({
    title: "Page title",
    desc: "Page description",
    image: "http://urltoimage.com/image.js",
    favicon: "./favicon.png",
  });
};
