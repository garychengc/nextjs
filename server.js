const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, err => {
      console.log(`server is listening on localhost/3000`);
      if (err) console.log(err);
    });
  })
  .catch(err => console.log(err));
