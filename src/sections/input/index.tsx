import { GITHUB_LINKS, PACKAGE_LINKS, visibileHeading } from "utils/constant";
import { useCallback, useMemo, useRef, useState } from "react";

import CheckSvg from "assets/icons/check.svg";
import EditSvg from "assets/icons/edit.svg";
import { IColumn } from "components/table/index.utils";
import { IDataProps } from "utils/interfaces";
import Input from "components/input";
import SearchSvg from "assets/icons/search.svg";
import SourceCode from "components/source-code";
import Styled from "./index.style";
import SubTitle from "components/sub-title";
import TableOfContent from "components/table-of-content";
import Title from "components/title";
import { dataProps } from "./index.utils";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useMediaQuery from "hooks/useMediaQuery";

const SectionInput = () => {
  const isMediumDesktop = useMediaQuery("(min-width: 1280px)");
  const systemRequireRef = useRef<HTMLHeadingElement | null>(null);
  const localRelatedRef = useRef<HTMLHeadingElement | null>(null);
  const exampleRef = useRef<HTMLHeadingElement | null>(null);
  const sourceCodeRef = useRef<HTMLHeadingElement | null>(null);
  const propsRef = useRef<HTMLHeadingElement | null>(null);
  const systemRequireEntry = useIntersectionObserver(
    systemRequireRef,
    visibileHeading,
  );
  const localRelatedEntry = useIntersectionObserver(
    localRelatedRef,
    visibileHeading,
  );
  const exampleEntry = useIntersectionObserver(exampleRef, visibileHeading);
  const sourceCodeEntry = useIntersectionObserver(
    sourceCodeRef,
    visibileHeading,
  );
  const propsEntry = useIntersectionObserver(propsRef, visibileHeading);
  const [exampleInputValue, setExampleInputValue] = useState<string>("");

  const handleChange = useCallback((e: any) => {
    setExampleInputValue(e.target.value.toString());
  }, []);

  const columnProps = useMemo<IColumn<IDataProps>[]>(() => {
    return [
      {
        field: "property",
        headerName: "Property",
        renderCell: ({ value }) => <Styled.Property>{value}</Styled.Property>,
      },
      {
        field: "description",
        headerName: "Description",
        renderCell: ({ value }) => <>{value}</>,
      },
      {
        field: "type",
        headerName: "Type",
        renderCell: ({ value }) => <code>{value}</code>,
      },
      {
        field: "default",
        headerName: "Default",
        renderCell: ({ value }) => <>{value || "--"}</>,
      },
      {
        field: "require",
        headerName: "Require",
        renderCell: ({ value }) => (
          <>{value ? <CheckSvg width={18} height={18} /> : null}</>
        ),
      },
    ];
  }, []);

  return (
    <>
      <Title>Input</Title>
      <div ref={systemRequireRef}>
        <SubTitle id={"system-requirements"}>System Requirements</SubTitle>
        <Styled.List>
          <li>
            Icons:{" "}
            <a href={PACKAGE_LINKS.ICONS} target={"_blank"} rel={"noreferrer"}>
              feather icons
            </a>
          </li>
          <li>
            Packages:{" "}
            <a
              href={PACKAGE_LINKS.CLASSNAMES}
              target={"_blank"}
              rel={"noreferrer"}
            >
              classnames
            </a>
            ,{" "}
            <a
              href={PACKAGE_LINKS.STYLED_COMPONENT}
              target={"_blank"}
              rel={"noreferrer"}
            >
              styled-components
            </a>
          </li>
        </Styled.List>
      </div>
      <br />
      <br />
      <div ref={localRelatedRef}>
        <SubTitle id={"local-related"}>Local related</SubTitle>
        <Styled.List>
          <li>
            Icons:{" "}
            <a href={GITHUB_LINKS.ICONS} target={"_blank"} rel={"noreferrer"}>
              folder
            </a>
          </li>
          <li>
            Colors:{" "}
            <a href={GITHUB_LINKS.COLORS} target={"_blank"} rel={"noreferrer"}>
              folder
            </a>
          </li>
        </Styled.List>
      </div>
      <br />
      <br />
      <div ref={exampleRef}>
        <SubTitle id={"example"}>Example</SubTitle>
        <div>
          <h3>No props component </h3>
          <Input />
          <br />
          <h3>With icons: </h3>
          <Input preIcon={<SearchSvg width={24} height={24} />} />
          <br />
          <Input postIcon={<EditSvg width={24} height={24} />} />
          <br />
          <h3>With state change: </h3>
          <Input
            onChange={handleChange}
            value={exampleInputValue}
            preIcon={<SearchSvg width={24} height={24} />}
          />
          <h4>Input value: {exampleInputValue}</h4>
          <br />
        </div>
      </div>
      <br />
      <br />
      <SourceCode
        languages={["tsx", "typescript"]}
        paths={[
          "src/components/input/index.tsx",
          "src/components/input/index.style.ts",
        ]}
        githubSource={"src/components/input"}
        ref={sourceCodeRef}
      />
      <br />
      <br />
      <div ref={propsRef}>
        <SubTitle id={"props"}>Props</SubTitle>
        <div>
          <Styled.TableProps data={dataProps} columns={columnProps} />
        </div>
      </div>
      {isMediumDesktop && (
        <TableOfContent
          items={[
            {
              label: "System Requirements",
              id: "system-requirements",
              isVisible: !!systemRequireEntry?.isIntersecting,
            },
            {
              label: "Local related",
              id: "local-related",
              isVisible: !!localRelatedEntry?.isIntersecting,
            },
            {
              label: "Example",
              id: "example",
              isVisible: !!exampleEntry?.isIntersecting,
            },
            {
              label: "Source code",
              id: "source-code",
              isVisible: !!sourceCodeEntry?.isIntersecting,
            },
            {
              label: "Props",
              id: "props",
              isVisible: !!propsEntry?.isIntersecting,
            },
          ]}
        />
      )}
    </>
  );
};

export default SectionInput;
