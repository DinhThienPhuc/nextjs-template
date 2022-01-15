import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from "react";

import Styled from "./index.style";

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode | string;
  noPrefix?: boolean;
}

const SubTitle = forwardRef(
  (
    { children, noPrefix, ...props }: IProps,
    ref: ForwardedRef<HTMLHeadingElement | null>,
  ) => {
    return (
      <h2 ref={ref} {...props}>
        {!noPrefix && <Styled.CustomDot />}
        {children}
      </h2>
    );
  },
);

SubTitle.displayName = "SubTitle";

export default SubTitle;
