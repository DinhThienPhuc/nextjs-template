import Link from "next/link";
import { useMemo } from "react";
import { ROUTES } from "utils/constant";

const ScreenHome = () => {
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

  return <ul>{JSXContent}</ul>;
};

export default ScreenHome;
