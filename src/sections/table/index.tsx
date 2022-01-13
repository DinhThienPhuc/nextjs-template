import { GITHUB_LINKS, PACKAGE_LINKS } from "utils/constant";
import { IColumn, ISort } from "components/table/index.utils";
import {
  IDataProps,
  IExampleData,
  dataProps,
  exampleData,
} from "./index.utils";
import { useCallback, useMemo, useState } from "react";

import SourceCode from "components/source-code";
import Styled from "./index.style";
import SubTitle from "components/sub-title";
import Table from "components/table";
import Title from "components/title";

const SectionTable = () => {
  const [sort, setSort] = useState<ISort>({} as ISort);

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
        renderCell: ({ value }) => <>{value}</>,
      },
      {
        field: "require",
        headerName: "Require",
        renderCell: ({ value }) => <>{value}</>,
      },
    ];
  }, []);

  const handleSort = useCallback((params: ISort) => {
    setSort(params);
  }, []);

  return (
    <>
      <Title>Table</Title>
      <SubTitle>System Requirements</SubTitle>
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
      <br />
      <br />
      <SubTitle>Local related</SubTitle>
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
      <br />
      <br />
      <SubTitle>Example</SubTitle>
      <div>
        <Table
          data={exampleData}
          columns={exampleColumns}
          onSort={handleSort}
          sort={sort}
        />
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
      />
      <br />
      <br />
      <SubTitle>Props</SubTitle>
      <div>
        <Styled.TableProps data={dataProps} columns={columnProps} />
      </div>
    </>
  );
};

export default SectionTable;
