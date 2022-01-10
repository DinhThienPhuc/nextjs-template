import Link from "next/link";
import { ROUTES } from "utils/constant";
import Styled from "./index.style";
import { useMemo } from "react";

const Sidebar = () => {
  const JSXContent = useMemo(() => {
    return ROUTES.map((route) => {
      const childRoutes = route.children.map((childRoute) => {
        return (
          <Link key={`${childRoute.route}`} href={childRoute.route} passHref>
            <Styled.SidebarItem>{childRoute.name}</Styled.SidebarItem>
          </Link>
        );
      });
      return (
        <>
          <label>{route.label}</label>
          <ul>{childRoutes}</ul>
        </>
      );
    });
  }, []);

  return <Styled.Sidebar>{JSXContent}</Styled.Sidebar>;
};

export default Sidebar;
