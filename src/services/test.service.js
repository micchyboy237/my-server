const { exec } = require("child_process");
const httpStatus = require("http-status");

/**
 * Load user and append to req.
 * @public
 */
exports.generateAst = async (req, res, next) => {
  try {
    return new Promise((resolve, reject) => {
      exec(`babel-node ./src/utils/renderAst`, (error, stdout, stderr) => {
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

        return resolve({
          data: JSON.parse(stdout),
        });
      });
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * Load user and append to req.
 * @public
 */
exports.generateCode = async (req, res, next) => {
  try {
    return new Promise((resolve, reject) => {
      exec(`babel-node ./src/utils/renderCode`, (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          reject(error);

          return;
        }

        if (stdout) {
          return resolve({
            data: JSON.parse(stdout),
          });
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
          reject(stderr);

          return;
        }
      });
    });
  } catch (error) {
    return next(error);
  }
};
