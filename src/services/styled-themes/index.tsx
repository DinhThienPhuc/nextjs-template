/* SERVICE: STYLED THEME
   ========================================================================== */

import { ReactNode, createContext, useContext, useMemo, useState } from "react";

import { ThemeProvider } from "styled-components";
import schemas from "./schema.json";

/**
 * Theme type infered from schema data
 */
type TTheme = keyof typeof schemas.data;

/**
 * Context interface
 */
interface IContext {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}

interface IProps {
  children: ReactNode;
}

/**
 * Theme Context
 */
const ThemeContext = createContext<IContext>({
  theme: "dark",
  setTheme: () => "",
});

/**
 * Theme Provider
 * @param props: with children
 * @returns Provider for theme switcher
 */
const ThemesProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<TTheme>("dark");

  const selectedSchema = useMemo(
    () => (theme ? schemas.data[theme] : schemas.data.dark),
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={selectedSchema}>{children}</ThemeProvider>;
    </ThemeContext.Provider>
  );
};

/**
 * Theme hook
 * @returns theme value and theme switcher callback
 */
const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};

export { useTheme, ThemesProvider };
