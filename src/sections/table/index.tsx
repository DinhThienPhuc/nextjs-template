import {
  CLASSNAMES_PKG_LINK,
  ICONS_LINK,
  STYLED_COMPONENT_PKG_LINK,
} from "utils/constant";
import { IColumn, ISort } from "components/table/index.utils";
import { useCallback, useMemo, useState } from "react";

import SourceCode from "components/source-code";
import Table from "components/table";

const data = [
  {
    name: "PCT",
    age: 24,
    school: "APOEW",
  },
  {
    name: "AWE",
    age: 21,
    school: "AWQ",
  },
  {
    name: "VCOIE",
    age: 42,
    school: "YUT",
  },
  {
    name: "CSA",
    age: 32,
    school: "WWEEEEE",
  },
];

interface IData {
  name: string;
  age: number;
  school: string;
}

const SectionTable = () => {
  const [sort, setSort] = useState<ISort>({} as ISort);

  const columns = useMemo<IColumn<IData>[]>(() => {
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
      <h2>Example</h2>
      <div>
        <Table data={data} columns={columns} onSort={handleSort} sort={sort} />
      </div>
      <br />
      <SourceCode
        languages={["tsx", "typescript", "typescript"]}
        paths={[
          "src/components/table/index.tsx",
          "src/components/table/index.style.ts",
          "src/components/table/index.utils.ts",
        ]}
      />
      <h2>Props</h2>
    </>
  );
};

export default SectionTable;
