import {
  Globe as IconGlobe,
  Moon as IconMoon,
  Sun as IconSun,
} from "react-feather";
import { NAVBAR_ITEMS, ROUTES } from "utils";
import { STYLED_THEMES, useTheme } from "modules";
import { useCallback, useMemo } from "react";

import Link from "next/link";
import { NextImage } from "components";
import { Png } from "assets/images";
import { Styled } from "./style";

export const Navbar = () => {
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
    if (theme === STYLED_THEMES.DARK) {
      return <IconSun width={18} height={18} />;
    }
    return <IconMoon width={18} height={18} />;
  }, [theme]);

  const handleSwitchTheme = useCallback(() => {
    const newTheme =
      theme === STYLED_THEMES.DARK ? STYLED_THEMES.LIGHT : STYLED_THEMES.DARK;
    setTheme(newTheme);
  }, [setTheme, theme]);

  return (
    <Styled.Navbar>
      <Link href={ROUTES.HOME} passHref>
        <Styled.Logo>
          <NextImage src={Png.Logo} alt="logo" width={57} height={39} />
        </Styled.Logo>
      </Link>
      <Styled.Right>
        {JSXNavbarItems}
        <Styled.Globe>
          <IconGlobe width={18} height={18} />
        </Styled.Globe>
        <Styled.ThemeSwitcher onClick={handleSwitchTheme}>
          {renderThemeSwitcher}
        </Styled.ThemeSwitcher>
      </Styled.Right>
    </Styled.Navbar>
  );
};
