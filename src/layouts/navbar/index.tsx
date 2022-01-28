import { useCallback, useMemo, useRef, useState } from "react";

import GlobeSvg from "assets/icons/globe.svg";
import Img from "components/img";
import Link from "next/link";
import LogoPng from "assets/logo.png";
import MoonSvg from "assets/icons/moon.svg";
import { NAVBAR_ROUTES } from "utils/routes";
import Styled from "./index.style";
import SunSvg from "assets/icons/sun.svg";
import useEventListener from "hooks/useEventListener";
import { useTheme } from "services/styled-themes";

const Navbar = () => {
  const [isScrollBelow, setScrollBelow] = useState<boolean>(false);
  const isScrollBelowRef = useRef<boolean>(false);
  const { theme, setTheme } = useTheme();

  const JSXNavbarRoutes = useMemo(() => {
    return NAVBAR_ROUTES.map((item) => {
      return (
        <Link key={item.route} href={item.route} passHref>
          <Styled.Item>{item.label}</Styled.Item>
        </Link>
      );
    });
  }, []);

  const handleScroll = useCallback((e: Event) => {
    const target = e.currentTarget as Window;
    if (target.scrollY >= 80 && !isScrollBelowRef.current) {
      setScrollBelow(true);
      isScrollBelowRef.current = true;
    } else if (target.scrollY < 80 && isScrollBelowRef.current) {
      setScrollBelow(false);
      isScrollBelowRef.current = false;
    }
  }, []);

  const renderThemeSwitcher = useMemo(() => {
    if (theme === "dark") {
      return <SunSvg width={18} height={18} />;
    }
    return <MoonSvg width={18} height={18} />;
  }, [theme]);

  const handleSwitchTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }, [setTheme, theme]);

  useEventListener("scroll", handleScroll);

  return (
    <Styled.Navbar isScrollBelow={isScrollBelow}>
      <Link href={"/"} passHref>
        <Styled.Logo>
          <Img src={LogoPng} alt="logo" width={57} height={39} />
        </Styled.Logo>
      </Link>
      <Styled.Right>
        {JSXNavbarRoutes}
        <Styled.Globe>
          <GlobeSvg width={18} height={18} />
        </Styled.Globe>
        <Styled.ThemeSwitcher onClick={handleSwitchTheme}>
          {renderThemeSwitcher}
        </Styled.ThemeSwitcher>
      </Styled.Right>
    </Styled.Navbar>
  );
};

export default Navbar;
