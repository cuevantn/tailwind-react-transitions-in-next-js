"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeViewer = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter
      language="tsx"
      style={atomDark}
      customStyle={{
        borderRadius: "0.75rem",
        margin: "0 1rem",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeViewer;
