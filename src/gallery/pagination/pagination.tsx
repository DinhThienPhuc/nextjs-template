/* GALLERY COMPONENT: BREADCRUMB - https://www.w3schools.com/howto/howto_css_breadcrumbs.asp
   ========================================================================== */

import { ReactNode, useMemo } from "react";

import Icons from "assets/icons";
import Styled from "./pagination.style";
import cx from "classnames";

enum EVariant {
  NORMAL = "normal",
  OUTLINED = "outlined",
  ROUNDED = "rounded",
}

interface IProps {
  className?: string;
  variant?: EVariant;
  size?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  prevIcon?: ReactNode | string;
  nextIcon?: ReactNode | string;
  totalPages: number;
  page: number;
  onChange?: (selectedPage: number) => void;
  disabled?: boolean;
}

const Pagination = ({ className, totalPages, page }: IProps) => {
  const numbers = useMemo(() => {
    return Array.from(Array(totalPages).keys());
  }, [totalPages]);

  const content = useMemo(() => {}, []);

  return (
    <Styled.Container className={cx("pagination", className)}>
      <Styled.PrevIcon>
        <Icons.ChevronLeft width={20} height={20} />
      </Styled.PrevIcon>
      {content}
      <Styled.NextIcon>
        <Icons.ChevronRight width={20} height={20} />
      </Styled.NextIcon>
    </Styled.Container>
  );
};

export default Pagination;
