import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";

import { GITHUB_LINKS } from "utils/constant";
import Styled from "./index.style";
import SubTitle from "components/sub-title";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import axios from "axios";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IProps {
  paths: string[];
  languages?: string[];
  githubSource?: string;
}

const SourceCode = forwardRef(
  (
    {
      languages = ["javascript", "javascript", "javascript"],
      paths,
      githubSource,
    }: IProps,
    ref: ForwardedRef<HTMLHeadingElement | null>,
  ) => {
    const [sources, setSources] = useState<string[]>([]);
    const [file, setFile] = useState<number>(0);
    const [isShow, setShow] = useState<boolean>(false);
    const [, copyToClipboard] = useCopyToClipboard();

    useEffect(() => {
      const fetchSourceCode = async () => {
        const arr: Promise<any>[] = [];
        paths.forEach((path) => {
          arr.push(axios(`${GITHUB_LINKS.SOURCES}${path}`));
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
        setShow(true);
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
      <div ref={ref}>
        <Styled.Actions>
          <Styled.HeaderLeft>
            <SubTitle id={"source-code"}>Source code</SubTitle>
            {isShow && (
              <Styled.FilesGroup>
                {paths[0] && (
                  <Styled.File
                    onClick={handleSelectSourceFile(0)}
                    $isSelected={file === 0}
                  >
                    .tsx
                  </Styled.File>
                )}
                {paths[1] && (
                  <Styled.File
                    onClick={handleSelectSourceFile(1)}
                    $isSelected={file === 1}
                  >
                    .style
                  </Styled.File>
                )}
                {paths[2] && (
                  <Styled.File
                    onClick={handleSelectSourceFile(2)}
                    $isSelected={file === 2}
                  >
                    .utils
                  </Styled.File>
                )}
              </Styled.FilesGroup>
            )}
          </Styled.HeaderLeft>
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
              href={`${GITHUB_LINKS.REPO}${githubSource}`}
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
      </div>
    );
  },
);

SourceCode.displayName = "SourceCode";

export default SourceCode;
