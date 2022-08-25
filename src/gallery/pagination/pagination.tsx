/* GALLERY COMPONENT: PAGINATION - https://www.w3schools.com/howto/howto_css_pagination.asp
   ========================================================================== */

import { IProps, VARIANT } from "./pagination.utils";
import { useCallback, useMemo, useState } from "react";

import Icons from "assets/icons";
import Styled from "./pagination.style";
import cx from "classnames";

const Pagination = ({
  className,
  totalPages,
  prevIcon,
  nextIcon,
  hidePrevButton = false,
  hideNextButton = false,
  disabled = false,
  showFirstButton = false,
  showLastButton = false,
  variant = VARIANT.NORMAL,
  size = 32,
  onChange,
}: IProps) => {
  const [page, setPage] = useState<number>(5);

  const numbers = useMemo(() => {
    return Array.from(Array(totalPages).keys()).map((n) => n + 1);
  }, [totalPages]);

  const handleChangePage = useCallback(
    (page: number) => {
      return () => {
        setPage(page);
        onChange?.(page);
      };
    },
    [onChange],
  );

  const renderItem = useCallback(
    (n: number) => {
      return (
        <Styled.Item
          className="item"
          key={n}
          isActive={n === page}
          disabled={disabled}
          variant={variant}
          size={size}
          onClick={handleChangePage(n)}
        >
          {n}
        </Styled.Item>
      );
    },
    [disabled, handleChangePage, page, size, variant],
  );

  const content = useMemo(() => {
    return numbers.map((n) => {
      return renderItem(n);
    });
  }, [numbers, renderItem]);

  const handleGoPrev = useCallback(() => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  }, [page]);

  const customPrevButton = useMemo(() => {
    if (hidePrevButton) {
      return null;
    }
    return (
      <Styled.Item
        className="prev-button"
        disabled={disabled || page === 1}
        variant={variant}
        size={size}
        onClick={handleGoPrev}
      >
        {prevIcon ? prevIcon : <Icons.ChevronLeft width={20} height={20} />}
      </Styled.Item>
    );
  }, [disabled, handleGoPrev, hidePrevButton, page, prevIcon, size, variant]);

  const handleGoNext = useCallback(() => {
    if (page < totalPages) {
      setPage((page) => page + 1);
    }
  }, [page, totalPages]);

  const customNextButton = useMemo(() => {
    if (hideNextButton) {
      return null;
    }
    return (
      <Styled.Item
        className="next-button"
        disabled={disabled || page === totalPages}
        variant={variant}
        size={size}
        onClick={handleGoNext}
      >
        {nextIcon ? nextIcon : <Icons.ChevronRight width={20} height={20} />}
      </Styled.Item>
    );
  }, [
    disabled,
    handleGoNext,
    hideNextButton,
    nextIcon,
    page,
    size,
    totalPages,
    variant,
  ]);

  const handleGoFirst = useCallback(() => {
    if (page > 1) {
      setPage(1);
    }
  }, [page]);

  const customFirstButton = useMemo(() => {
    if (!showFirstButton) {
      return null;
    }
    return (
      <Styled.Item
        className="first-button"
        disabled={disabled || page === 1}
        variant={variant}
        size={size}
        onClick={handleGoFirst}
      >
        <Icons.ChevronsLeft width={20} height={20} />
      </Styled.Item>
    );
  }, [disabled, handleGoFirst, page, showFirstButton, size, variant]);

  const handleGoLast = useCallback(() => {
    if (page < totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const customLastButton = useMemo(() => {
    if (!showLastButton) {
      return null;
    }
    return (
      <Styled.Item
        className="last-button"
        disabled={disabled || page === totalPages}
        variant={variant}
        size={size}
        onClick={handleGoLast}
      >
        <Icons.ChevronsRight width={20} height={20} />
      </Styled.Item>
    );
  }, [disabled, handleGoLast, page, showLastButton, size, totalPages, variant]);

  return (
    <Styled.Container className={cx("pagination", className)}>
      {customFirstButton}
      {customPrevButton}
      {content}
      {customNextButton}
      {customLastButton}
    </Styled.Container>
  );
};

export default Pagination;
