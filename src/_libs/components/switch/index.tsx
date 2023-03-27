import { forwardRef, useMemo } from "react";

import { ISwitchProps } from "./types";
import Styled from "./style";
import cx from "classnames";

const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
  (
    {
      className,
      leftLabel = null,
      rightLabel = null,
      disabled = false,
      value,
      ...props
    },
    ref,
  ) => {
    const leftLabelCustom = useMemo(() => {
      if (!leftLabel) {
        return null;
      }
      return (
        <Styled.LeftLabel className="switch-label__left">
          {leftLabel}
        </Styled.LeftLabel>
      );
    }, [leftLabel]);

    const rightLabelCustom = useMemo(() => {
      if (!rightLabel) {
        return null;
      }
      return (
        <Styled.RightLabel className="switch-label__right">
          {rightLabel}
        </Styled.RightLabel>
      );
    }, [rightLabel]);

    return (
      <Styled.Container className={cx("switch", className)}>
        {leftLabelCustom}
        <Styled.Pad
          className={cx("switch-pad", className)}
          isOn={!!value}
          disabled={disabled}
        >
          <input
            {...props}
            ref={ref}
            value={value}
            disabled={disabled}
            type="checkbox"
          />
        </Styled.Pad>
        {rightLabelCustom}
      </Styled.Container>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
