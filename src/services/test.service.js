const { exec } = require("child_process");
const httpStatus = require("http-status");

/**
 * Load user and append to req.
 * @public
 */
exports.generateAst = async (req, res, next) => {
  try {
    return new Promise((resolve, reject) => {
      exec(`babel-node ./src/utils/renderCode`, (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          reject(error);

          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          reject(stderr);

          return;
        }
        console.info(`stdout: ${stdout}`);

        return resolve("Success!");
      });
    });
  } catch (error) {
    return next(error);
  }
};
