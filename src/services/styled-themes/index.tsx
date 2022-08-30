/* SERVICE: STYLED THEME
   ========================================================================== */

import { ReactNode, createContext, useContext, useMemo, useState } from "react";

import { SPECIAL_VALUE } from "utils/constants";
import { ThemeProvider } from "styled-components";
import schemas from "./schema.json";

/**
 * Theme values
 */
export enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

/**
 * Context interface
 */
interface IContext {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
}

interface IProps {
  children: ReactNode;
}

/**
 * Theme Context
 */
const ThemeContext = createContext<IContext>({
  theme: ETheme.DARK,
  setTheme: () => SPECIAL_VALUE.EMPTY_STRING,
});

/**
 * Theme Provider
 * @param props: with children
 * @returns Provider for theme switcher
 */
export const ThemesProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.LIGHT);

  const selectedSchema = useMemo(
    () => (theme ? schemas.data[theme] : schemas.data.dark),
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={selectedSchema}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * Theme hook
 * @returns theme value and theme switcher callback
 */
export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};
