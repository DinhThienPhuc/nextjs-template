/* LAYOUT SUBCOMPONENT: NAVBAR
   ========================================================================== */

import { ETheme, useTheme } from "services/styled-themes";
import { NAVBAR_ITEMS, ROUTES } from "utils/constants";
import { useCallback, useMemo } from "react";

import Icons from "assets/icons";
import Images from "assets/images";
import { Img } from "components";
import Link from "next/link";
import Styled from "./navbar.style";

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
    if (theme === ETheme.DARK) {
      return <Icons.Sun width={18} height={18} />;
    }
    return <Icons.Moon width={18} height={18} />;
  }, [theme]);

  const handleSwitchTheme = useCallback(() => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    setTheme(newTheme);
  }, [setTheme, theme]);

  return (
    <Styled.Navbar>
      <Link href={ROUTES.HOME} passHref>
        <Styled.Logo>
          <Img src={Images.Png.Logo} alt="logo" width={57} height={39} />
        </Styled.Logo>
      </Link>
      <Styled.Right>
        {JSXNavbarItems}
        <Styled.Globe>
          <Icons.Globe width={18} height={18} />
        </Styled.Globe>
        <Styled.ThemeSwitcher onClick={handleSwitchTheme}>
          {renderThemeSwitcher}
        </Styled.ThemeSwitcher>
      </Styled.Right>
    </Styled.Navbar>
  );
};

export default Navbar;
