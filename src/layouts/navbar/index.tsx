/* LAYOUT SUBCOMPONENT: NAVBAR
   ========================================================================== */

import { useCallback, useMemo } from "react";

import GlobeSvg from "assets/icons/globe.svg";
import Img from "components/img";
import Link from "next/link";
import LogoPng from "assets/logo.png";
import MoonSvg from "assets/icons/moon.svg";
import { NAVBAR_ITEMS } from "utils/constants";
import Styled from "./index.style";
import SunSvg from "assets/icons/sun.svg";
import { useTheme } from "services/styled-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const JSXNavbarItems = useMemo(() => {
    return NAVBAR_ITEMS.map((item) => {
      return (
        <Link key={item.path} href={item.path} passHref>
          <Styled.Item>{item.label}</Styled.Item>
        </Link>
      );
    });
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

  return (
    <Styled.Navbar>
      <Link href={"/"} passHref>
        <Styled.Logo>
          <Img src={LogoPng} alt="logo" width={57} height={39} />
        </Styled.Logo>
      </Link>
      <Styled.Right>
        {JSXNavbarItems}
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
