import Link from "next/link";
import { ROUTES } from "utils/constant";
import Styled from "./index.style";
import { useMemo } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const JSXContent = useMemo(() => {
    return ROUTES.map((route) => {
      if (!route.children) {
        return (
          <div key={route.label}>
            <Link href={route.route} passHref>
              <Styled.Label isActive={router.asPath === route.route}>
                {route.label}
              </Styled.Label>
            </Link>
            <ul></ul>
          </div>
        );
      }

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
          <ul>{childRoutes}</ul>
        </div>
      );
    });
  }, [router.asPath]);

  return <Styled.Sidebar>{JSXContent}</Styled.Sidebar>;
};

export default Sidebar;
