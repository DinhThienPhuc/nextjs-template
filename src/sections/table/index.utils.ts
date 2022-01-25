export const exampleData = [
  { name: "PCT", age: 24, school: "APOEW" },
  { name: "AWE", age: 21, school: "AWQ" },
  { name: "VCOIE", age: 42, school: "YUT" },
  { name: "CSA", age: 32, school: "WWEEEEE" },
];

export interface IExampleData {
  name: string;
  age: number;
  school: string;
}

export const dataProps = [
  {
    property: "caption",
    description: "Caption for the table",
    type: "string",
    default: "",
    require: false,
  },
  {
    property: "className",
    description:
      "className passed to the table, allow user to customize table with their own styles by styled-component syntax",
    type: "string",
    default: "",
    require: false,
  },
  {
    property: "data",
    description: "Data to show in table",
    type: "any[]",
    default: "",
    require: true,
  },
  {
    property: "columns",
    description: "Customize column for table",
    type: "<IColumn<DataType>>[]",
    default: "",
    require: true,
  },
  {
    property: "onSort",
    description: "Function handles sort",
    type: "(params: ISort) => void",
    default: "",
    require: false,
  },
  {
    property: "sort",
    description: "32",
    type: "ISort",
    default: "",
    require: false,
  },
];
