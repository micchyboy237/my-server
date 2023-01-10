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
      <Import default="React" imports={["FC"]} from="react" />
      <Export>
        <Interface name="HelloProps" />
      </Export>
      <Var kind={VarKind.Const} typeAnnotation="FC<HelloProps>" name="Hello">
        <Function
          arrow
          params={[
            <Identifier
              typeAnnotation={
                <TypeAnnotation>
                  <TypeReference name="HelloProps" />
                </TypeAnnotation>
              }
            >
              props
            </Identifier>,
          ]}
        >
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
        plugins: [
          "jsx",
          "classProperties",
          [
            "typescript",
            {
              dts: true,
            },
          ],
        ],
      },
    }
  );

  console.debug("react-ast typed sample:", { code });

  return code;
};
