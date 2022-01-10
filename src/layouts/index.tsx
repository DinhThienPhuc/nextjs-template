import { ReactNode } from "react";

interface IProps {
  children: ReactNode | string;
}

const LayoutDefault = ({ children }: IProps) => {
  return (
    <>
      <header />
      <main>{children}</main>
      <footer />
    </>
  );
};

export default LayoutDefault;
