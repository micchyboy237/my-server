const React = require("react");
const { renderAst, ClassDeclaration } = require("react-ast");

const ast = renderAst(<ClassDeclaration id="Hello" />);

// console.log("react-ast generated ast:\n\n", ast);
process.stdout.write(
  "react-ast generated ast:\n\n" + JSON.stringify(ast) + "\n"
);

module.exports = ast;
