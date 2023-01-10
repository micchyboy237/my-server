const express = require("express");
const validate = require("express-validation");
const controller = require("../../controllers/test.controller");
// const {
//   listTests,
//   createTest,
//   replaceTest,
//   updateTest,
// } = require("../../validations/test.validation");

const router = express.Router();

/**
 * Load test when API with testId route parameter is hit
 */
router.param("testId", controller.load);

router
  .route("/ast")
  /**
   * @api {get} v1/tests List Tests
   * @apiDescription Get a list of tests
   * @apiVersion 1.0.0
   * @apiName ListTests
   * @apiGroup Test
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   Test's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Tests per page
   * @apiParam  {String}             [name]       Test's name
   * @apiParam  {String}             [email]      Test's email
   * @apiParam  {String=test,admin}  [role]       Test's role
   *
   * @apiSuccess {Object[]} tests List of tests.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated tests can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  // .get(validate(listTests), controller.list)
  .get(controller.generateAst);

router
  .route("/code")
  /**
   * @api {get} v1/tests List Tests
   * @apiDescription Get a list of tests
   * @apiVersion 1.0.0
   * @apiName ListTests
   * @apiGroup Test
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   Test's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Tests per page
   * @apiParam  {String}             [name]       Test's name
   * @apiParam  {String}             [email]      Test's email
   * @apiParam  {String=test,admin}  [role]       Test's role
   *
   * @apiSuccess {Object[]} tests List of tests.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated tests can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  // .get(validate(listTests), controller.list)
  .get(controller.generateCode);

module.exports = router;
