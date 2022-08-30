/* GALLERY COMPONENT: BADGE - https://www.w3schools.com/howto/howto_css_badge.asp
   ========================================================================== */

import { ReactNode, useMemo } from "react";

import Styled from "./badge.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

interface IProps {
  className?: string;
  children: ReactNode | string;
  counter?: number;
  customCounter?: ReactNode;
  showZero?: boolean;
  max?: number;
}

const Breadcrumb = (props: IProps) => {
  const {
    className,
    children,
    counter = 0,
    customCounter,
    showZero = false,
    max = 99,
  } = props;

  const circleCounter = useMemo(() => {
    if (customCounter) {
      return customCounter;
    }
    let counterNum: string = "";
    if (counter === 0) {
      counterNum = showZero ? "0" : "";
    } else if (counter >= max) {
      counterNum = `${max}+`;
    } else {
      counterNum = `${counter}`;
    }
    return <Styled.Circle className="circle">{counterNum}</Styled.Circle>;
  }, [counter, customCounter, max, showZero]);

  useWhyDidYouUpdate("Breadcrumb", props);

  return (
    <Styled.Badge className={cx("badge", className)}>
      {circleCounter}
      {children}
    </Styled.Badge>
  );
};

export default Breadcrumb;
