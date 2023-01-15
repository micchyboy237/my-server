const express = require("express");
const app = require("./src/app");

app.listen(8080, () =>
  console.log("Server listening on http://localhost:8080!")
);
