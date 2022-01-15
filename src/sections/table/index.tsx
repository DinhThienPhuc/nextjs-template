import { GITHUB_LINKS, PACKAGE_LINKS, visibileHeading } from "utils/constant";
import { IColumn, ISort } from "components/table/index.utils";
import {
  IDataProps,
  IExampleData,
  dataProps,
  exampleData,
} from "./index.utils";
import { useCallback, useMemo, useRef, useState } from "react";

import CheckSvg from "assets/icons/check.svg";
import SourceCode from "components/source-code";
import Styled from "./index.style";
import SubTitle from "components/sub-title";
import Table from "components/table";
import TableOfContent from "components/table-of-content";
import Title from "components/title";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useMediaQuery from "hooks/useMediaQuery";

const SectionTable = () => {
  const [sort, setSort] = useState<ISort>({} as ISort);
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

  const exampleColumns = useMemo<IColumn<IExampleData>[]>(() => {
    return [
      {
        field: "name",
        headerName: "Name",
        isSort: true,
        renderCell: ({ value }) => <>{value}</>,
      },
      {
        field: "age",
        headerName: "Age",
        isSort: true,
        renderCell: ({ value }) => <>{value}</>,
      },
      {
        field: "school",
        headerName: "School",
        renderCell: ({ value }) => <>{value}</>,
      },
    ];
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

  const handleSort = useCallback((params: ISort) => {
    setSort(params);
  }, []);

  return (
    <>
      <Title>Table</Title>
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
          <Table
            data={exampleData}
            columns={exampleColumns}
            onSort={handleSort}
            sort={sort}
          />
        </div>
      </div>
      <br />
      <br />
      <SourceCode
        languages={["tsx", "typescript", "typescript"]}
        paths={[
          "src/components/table/index.tsx",
          "src/components/table/index.style.ts",
          "src/components/table/index.utils.ts",
        ]}
        githubSource={"src/components/table"}
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

export default SectionTable;
