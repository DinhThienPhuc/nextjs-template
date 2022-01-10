import Link from "next/link";
import { useMemo } from "react";
import { ROUTES } from "utils/constant";
import { NextPageCustomized } from "utils/interfaces";
import SourceCode from "modules/source-code";

const PageHome: NextPageCustomized = () => {
  const JSXContent = useMemo(() => {
    return ROUTES.map((parentRoute) => {
      if (!parentRoute.children) {
        return (
          <Link key={`${parentRoute.route}`} href={parentRoute.route} passHref>
            {parentRoute.name}
          </Link>
        );
      }
      return parentRoute.children.map((childRoute) => {
        return (
          <Link key={`${childRoute.route}`} href={childRoute.route} passHref>
            {childRoute.name}
          </Link>
        );
      });
    });
  }, []);

  return (
    <>
      <ul>{JSXContent}</ul>
      <SourceCode path="src/modules/source-code/index.tsx" />
    </>
  );
};

export default PageHome;
