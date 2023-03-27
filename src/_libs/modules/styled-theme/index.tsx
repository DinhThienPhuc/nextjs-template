import { IStyledThemeProps, TStyledTheme, TStyledThemeContext } from "./types";
import { createContext, useContext, useMemo, useState } from "react";

import { IObject } from "@iris/utils";
import { ThemeProvider } from "styled-components";

const THEME: IObject<TStyledTheme> = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeContext = createContext<TStyledThemeContext>({
  theme: THEME["DARK"],
  setTheme: () => "",
});

const ThemesProvider = ({
  schema,
  defaultTheme = THEME["DARK"],
  children,
}: IStyledThemeProps) => {
  const [theme, setTheme] = useState<TStyledTheme>(defaultTheme);

  const selectedSchema = useMemo(
    () => (theme ? schema?.data?.[theme] : schema?.data?.[defaultTheme]),
    [defaultTheme, schema?.data, theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={selectedSchema}>{children}</ThemeProvider>;
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};

const styledTheme = { useTheme, ThemesProvider };

export default styledTheme;
