import { GITHUB_CODE_URL, SOURCE_CODE_URL } from "utils/constant";
import { useCallback, useEffect, useState } from "react";

import Styled from "./index.style";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import axios from "axios";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IProps {
  paths: string[];
  languages?: string[];
  githubSource?: string;
}

const SourceCode = ({
  languages = ["javascript", "javascript", "javascript"],
  paths,
  githubSource,
}: IProps) => {
  const [sources, setSources] = useState<string[]>([]);
  const [file, setFile] = useState<number>(0);
  const [isShow, setShow] = useState<boolean>(false);
  const [, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    const fetchSourceCode = async () => {
      const arr: Promise<any>[] = [];
      paths.forEach((path) => {
        arr.push(axios(`${SOURCE_CODE_URL}${path}`));
      });
      const responses = await Promise.allSettled(arr);

      let result: string[] = [];
      responses.forEach((response) => {
        if (response.status === "fulfilled") {
          result.push(response.value.data);
        } else {
          result.push("File not found!");
        }
      });
      setSources(result);
    };

    fetchSourceCode();
  }, [paths]);

  const handleCopyToClipboard = useCallback(
    (file: number) => {
      return () => {
        copyToClipboard(sources[file]);
      };
    },
    [copyToClipboard, sources],
  );

  const handleShowSourceCode = useCallback(async () => {
    setShow(!isShow);
  }, [isShow]);

  const handleSelectSourceFile = useCallback((index: number) => {
    return () => {
      setFile(index);
    };
  }, []);

  return (
    <>
      <Styled.Actions>
        <div>
          {isShow && (
            <Styled.FilesGroup>
              {paths[0] && (
                <Styled.File
                  onClick={handleSelectSourceFile(0)}
                  $isSelected={file === 0}
                >
                  <Styled.FileInner $isSelected={file === 0}>
                    .tsx
                  </Styled.FileInner>
                </Styled.File>
              )}
              {paths[1] && (
                <Styled.File
                  onClick={handleSelectSourceFile(1)}
                  $isSelected={file === 1}
                >
                  <Styled.FileInner $isSelected={file === 1}>
                    .style
                  </Styled.FileInner>
                </Styled.File>
              )}
              {paths[2] && (
                <Styled.File
                  onClick={handleSelectSourceFile(2)}
                  $isSelected={file === 2}
                >
                  <Styled.FileInner $isSelected={file === 2}>
                    .utils
                  </Styled.FileInner>
                </Styled.File>
              )}
            </Styled.FilesGroup>
          )}
        </div>
        <div>
          <Styled.Code
            onClick={handleShowSourceCode}
            $isActive={isShow}
            width={18}
            height={18}
          />
          <Styled.Copy
            onClick={handleCopyToClipboard(file)}
            width={18}
            height={18}
          />
          <a
            href={`${GITHUB_CODE_URL}${githubSource}`}
            target={"_blank"}
            rel={"noreferrer"}
            className={"no-hightlight"}
          >
            <Styled.Github width={18} height={18} />
          </a>
        </div>
      </Styled.Actions>
      {isShow && (
        <SyntaxHighlighter
          language={languages[file]}
          style={vscDarkPlus}
          showLineNumbers
        >
          {sources[file]}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default SourceCode;
