import {
  CLASSNAMES_PKG_LINK,
  ICONS_LINK,
  STYLED_COMPONENT_PKG_LINK,
} from "utils/constant";
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
import Table from "components/table";

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
      <h1>Table</h1>
      <h2>System Requirements</h2>
      <ul>
        <li>
          Icons:{" "}
          <a href={ICONS_LINK} target={"_blank"} rel={"noreferrer"}>
            Feathericon
          </a>
        </li>
        <li>
          Packages:{" "}
          <a href={CLASSNAMES_PKG_LINK} target={"_blank"} rel={"noreferrer"}>
            classnames
          </a>
          ,{" "}
          <a
            href={STYLED_COMPONENT_PKG_LINK}
            target={"_blank"}
            rel={"noreferrer"}
          >
            styled-components
          </a>
        </li>
      </ul>
      <br />
      <br />
      <h2>Example</h2>
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
      <h2>Props</h2>
      <div>
        <Styled.TableProps data={dataProps} columns={columnProps} />
      </div>
    </>
  );
};

export default SectionTable;
