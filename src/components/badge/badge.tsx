/* COMPONENT: BADGE - https://www.w3schools.com/howto/howto_css_badge.asp
   ========================================================================== */

import { DEFAULT_PROPS, IProps } from "./badge.utils";

import { SPECIAL_VALUE } from "utils/constants";
import Styled from "./badge.style";
import cx from "classnames";
import { useMemo } from "react";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const Breadcrumb = (props: IProps) => {
  const {
    className,
    children,
    counter = DEFAULT_PROPS.counter,
    customCounter,
    showZero = DEFAULT_PROPS.showZero,
    max = DEFAULT_PROPS.max,
  } = props;

  const circleCounter = useMemo(() => {
    if (customCounter) {
      return customCounter;
    }
    let counterNum: string = SPECIAL_VALUE.EMPTY_STRING;
    if (counter === 0) {
      counterNum = showZero ? "0" : SPECIAL_VALUE.EMPTY_STRING;
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
