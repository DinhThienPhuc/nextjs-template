import { ReactNode, createContext, useContext, useMemo, useState } from "react";

import { ThemeProvider } from "styled-components";
import schemas from "./schema.json";

type IThemes = keyof typeof schemas.data;

type IContext = {
  theme: IThemes;
  setTheme: (theme: IThemes) => void;
};

interface IProps {
  children: ReactNode;
}

const ThemeContext = createContext<IContext>({
  theme: "dark",
  setTheme: () => "",
});

const ThemesProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<IThemes>("dark");

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

const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};

export { useTheme, ThemesProvider };
