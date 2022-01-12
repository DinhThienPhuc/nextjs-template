export const ROUTES = [
  {
    label: "Elements",
    children: [
      {
        name: "Input",
        route: "/elements/input",
      },
      {
        name: "Button",
        route: "/elements/button",
      },
    ],
  },
  {
    label: "Menus",
    children: [
      {
        name: "Accordion",
        route: "/menus/accordion",
      },
      {
        name: "Tabs",
        route: "/menus/tabs",
      },
      {
        name: "Breadcrumbs",
        route: "/menus/breadcrumbs",
      },
    ],
  },
  {
    label: "Table",
    route: "/table",
  },
  {
    label: "More",
    children: [
      {
        name: "Tooltip",
        route: "/more/tooltip",
      },
      {
        name: "Timeline",
        route: "/more/timeline",
      },
    ],
  },
];
