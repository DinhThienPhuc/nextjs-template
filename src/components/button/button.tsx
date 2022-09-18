/* COMPONENT: BUTTON - 
   ========================================================================== */

import { DEFAULT_PROPS, IProps } from "./button.utils";
import { MouseEvent, useCallback, useMemo } from "react";

import Styled from "./button.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const Button = (props: IProps) => {
  const {
    className,
    children,
    variant = DEFAULT_PROPS.variant,
    onClick,
    startIcon,
    endIcon,
    loading,
    ...othersProps
  } = props;

  const customStartIcon = useMemo(() => {
    if (!startIcon) {
      return null;
    }
    return <Styled.ButtonIcon>{startIcon}</Styled.ButtonIcon>;
  }, [startIcon]);

  const customEndIcon = useMemo(() => {
    if (!endIcon) {
      return null;
    }
    return <Styled.ButtonIcon>{endIcon}</Styled.ButtonIcon>;
  }, [endIcon]);

  const handleClick = useCallback(
    (e: MouseEvent<any, globalThis.MouseEvent>) => {
      onClick?.(e);
    },
    [onClick],
  );

  const content = useMemo(() => {
    if (loading) {
      return <Styled.Loading className={cx("button-loading")} />;
    }
    return (
      <>
        {customStartIcon}
        <Styled.Text className={cx("button-text")}>{children}</Styled.Text>
        {customEndIcon}
      </>
    );
  }, [children, customEndIcon, customStartIcon, loading]);

  useWhyDidYouUpdate("Button", props);

  return (
    <Styled.Button
      className={cx("button", className)}
      variant={variant}
      onClick={handleClick}
      {...othersProps}
    >
      {content}
    </Styled.Button>
  );
};

export default Button;
