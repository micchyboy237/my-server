const React = require("react");
const {
  Export,
  Expression,
  ExpressionStatement,
  Function,
  Identifier,
  Import,
  Interface,
  JSX,
  ReactNode,
  Return,
  TypeAnnotation,
  TypeReference,
  Var,
  VarKind,
  render,
  Code,
} = require("react-ast");

const code = render(
  <>
    <Import default="React" from="react" />

    <Var kind={VarKind.Const} name="Hello">
      <Function arrow params={[<Identifier>props</Identifier>]}>
        <Return>
          <JSX />
        </Return>
      </Function>
    </Var>

    <Expression properties="Hello.defaultProps">{{}}</Expression>
    <Export default>
      <Identifier>Hello</Identifier>
    </Export>
  </>,
  {
    prettier: false,
    parser: "babel",
    parserOptions: {
      plugins: ["jsx", "classProperties"],
    },
  }
);

// console.log("react-ast generated code:\n\n", code);
process.stdout.write(JSON.stringify(code));

module.exports = code;
