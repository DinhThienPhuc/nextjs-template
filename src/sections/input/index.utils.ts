export const dataProps = [
  {
    property: "className",
    description:
      "className passed to the input, allow user to customize table with their own styles by styled-component syntax",
    type: "string",
    default: "",
    require: false,
  },
  {
    property: "preIcon",
    description:
      "React Node for the prefix icon. Because it's React Node, so it can include event handler or other valid props",
    type: "ReactNode | string | null",
    default: "null",
    require: false,
  },
  {
    property: "postIcon",
    description:
      "React Node for the postfix icon. Because it's React Node, so it can include event handler or other valid props",
    type: "ReactNode | string | null",
    default: "null",
    require: false,
  },
  {
    property: "value",
    description:
      "Value controlled by outer component, passed to the Input component to show the text user typing ...",
    type: "string",
    default: "",
    require: false,
  },
  {
    property: "onChange",
    description:
      "Change handler, trigger when user typing text in Input component. The value must be handled in the outer component",
    type: "ChangeEventHandler<T> | undefined",
    default: "",
    require: false,
  },
];
