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

module.exports = () => {
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
      parserOptions: {
        plugins: ["jsx", "classProperties"],
      },
    }
  );

  console.debug("react-ast sample:", { code });

  return code;
};
