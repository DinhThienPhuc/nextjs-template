export const SIDEBAR_ROUTES = [
  {
    label: "Elements",
    children: [
      {
        name: "Input",
        route: "/component/elements/input",
      },
      {
        name: "Button",
        route: "/component/elements/button",
      },
    ],
  },
  {
    label: "Menus",
    children: [
      {
        name: "Accordion",
        route: "/component/menus/accordion",
      },
      {
        name: "Tabs",
        route: "/component/menus/tabs",
      },
      {
        name: "Breadcrumbs",
        route: "/component/menus/breadcrumbs",
      },
    ],
  },
  {
    label: "Tables",
    children: [
      {
        name: "Table",
        route: "/component/table",
      },
    ],
  },
  {
    label: "More",
    children: [
      {
        name: "Tooltip",
        route: "/component/more/tooltip",
      },
      {
        name: "Timeline",
        route: "/component/more/timeline",
      },
    ],
  },
];

export const NAVBAR_ROUTES = [
  {
    label: "Hooks",
    route: "/hook",
  },
  {
    label: "Components",
    route: "/component",
  },
];
