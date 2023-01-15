const express = require("express");
const path = require("path");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/v1");
const { logs } = require("./config/vars");
const error = require("./middlewares/error");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

// set security HTTP headers
app.use(helmet());

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
