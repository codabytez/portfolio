import { NextPage } from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock: NextPage<ICodeBlockProps> = ({
  code,
  language,
  showLineNumbers = true,
  backgroundColor,
  borderRadius,
  padding,
  style,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={style || duotoneDark}
      showLineNumbers
      lineNumberStyle={{
        minWidth: "2rem",
        marginRight: "1rem",
        display: showLineNumbers ? "block" : "none",
      }}
      wrapLines
      wrapLongLines
      customStyle={{
        fontSize: "18px",
        fontWeight: 500,
        padding: padding || "1rem",
        borderRadius: borderRadius || "0.5rem",
        backgroundColor: backgroundColor || "#FFFFFF00",
        overflowX: "auto",
        whiteSpace: "pre",
        scrollbarWidth: "none",
        scrollbarColor: "transparent transparent",
        msOverflowStyle: "none",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
