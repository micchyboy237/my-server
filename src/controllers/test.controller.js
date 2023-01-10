const httpStatus = require("http-status");
const { omit } = require("lodash");
const Test = require("../services/test.service");

/**
 * Load test and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const test = await Test.get(id);
    req.locals = { test };
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get test list
 * @public
 */
exports.generateAst = async (req, res, next) => {
  try {
    const result = await Test.generateAst(req.query, res, next);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get test list
 * @public
 */
exports.generateCode = async (req, res, next) => {
  try {
    const result = await Test.generateCode(req.query, res, next);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Create new test
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const test = new Test(req.body);
    const savedTest = await test.save();
    res.status(httpStatus.CREATED);
    res.json(savedTest.transform());
  } catch (error) {
    next(Test.checkDuplicateEmail(error));
  }
};
