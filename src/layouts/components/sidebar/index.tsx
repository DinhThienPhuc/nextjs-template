import Link from "next/link";
import { ROUTES } from "utils/routes";
import Styled from "./index.style";
import { useMemo } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const JSXContent = useMemo(() => {
    return ROUTES.map((route) => {
      const childRoutes = route.children.map((childRoute) => {
        return (
          <Link key={`${childRoute.route}`} href={childRoute.route} passHref>
            <Styled.SidebarItem isActive={router.asPath === childRoute.route}>
              {childRoute.name}
            </Styled.SidebarItem>
          </Link>
        );
      });
      return (
        <div key={route.label}>
          <label>{route.label}</label>
          <Styled.SidebarItemGroup>{childRoutes}</Styled.SidebarItemGroup>
        </div>
      );
    });
  }, [router.asPath]);

  return <Styled.Sidebar>{JSXContent}</Styled.Sidebar>;
};

export default Sidebar;
