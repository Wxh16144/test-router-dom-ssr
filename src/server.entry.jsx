import express from "express";
import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

let app = express();

app.get("*", (req, res) => {
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} basename="/a/">
      <App />
    </StaticRouter>
  );
  res.send("<!DOCTYPE html>" + html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
});
