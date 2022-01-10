import axios from "axios";
import CodeSvg from "assets/icons/code.svg";
import { useCallback, useState } from "react";
import { SOURCE_CODE_URL } from "utils/constant";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface IProps {
  path: string;
}

const SourceCode = ({ path }: IProps) => {
  const [source, setSource] = useState<string>("");

  const fetchSourceCode = useCallback(async () => {
    try {
      const response = await axios(`${SOURCE_CODE_URL}${path}`);
      setSource(response.data);
    } catch (error) {
      setSource("File not found");
    }
  }, [path]);

  return (
    <>
      <CodeSvg onClick={fetchSourceCode} width={24} height={24} />
      {source && (
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          showLineNumbers
        >
          {source}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default SourceCode;
