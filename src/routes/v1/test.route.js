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
  .route("/")
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
  .get(controller.list)
  /**
   * @api {post} v1/tests Create Test
   * @apiDescription Create a new test
   * @apiVersion 1.0.0
   * @apiName CreateTest
   * @apiGroup Test
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   Test's access token
   *
   * @apiParam  {String}             email     Test's email
   * @apiParam  {String{6..128}}     password  Test's password
   * @apiParam  {String{..128}}      [name]    Test's name
   * @apiParam  {String=test,admin}  [role]    Test's role
   *
   * @apiSuccess (Created 201) {String}  id         Test's id
   * @apiSuccess (Created 201) {String}  name       Test's name
   * @apiSuccess (Created 201) {String}  email      Test's email
   * @apiSuccess (Created 201) {String}  role       Test's role
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated tests can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  // .post(validate(createTest), controller.create);
  .post(controller.create);

module.exports = router;
