/* GALLERY COMPONENT: SWITCH - https://www.w3schools.com/howto/howto_css_switch.asp
   ========================================================================== */

import { MouseEventHandler, ReactNode, useCallback, useMemo } from "react";

import Styled from "./switch.style";
import cx from "classnames";
import { doNothing } from "utils/functions";

interface IProps {
  className?: string;
  disabled?: boolean;
  width?: number;
  height?: number;
  size?: number;
  preText?: ReactNode | string;
  postText?: ReactNode | string;
  customSlider?: ReactNode;
  isCircle?: boolean;
  checked: boolean;
  onChange?: MouseEventHandler<HTMLDivElement>;
}

const Switch = ({
  className,
  width = 34,
  height = 14,
  size = 18,
  preText,
  postText,
  checked,
  onChange,
  disabled = false,
}: IProps) => {
  const customPreText = useMemo(() => {
    if (!preText) {
      return null;
    }
    return <Styled.PreText className="pre-text">{preText}</Styled.PreText>;
  }, [preText]);

  const customPostText = useMemo(() => {
    if (!postText) {
      return null;
    }
    return <Styled.PostText className="post-text">{postText}</Styled.PostText>;
  }, [postText]);

  const slider = useMemo(() => {
    return (
      <Styled.Slider
        className="slider"
        width={width}
        height={height}
        disabled={disabled}
      >
        <Styled.Track
          className="track"
          checked={checked}
          width={width}
          height={height}
          disabled={disabled}
        />
        <Styled.Circle
          className="circle"
          checked={checked}
          width={width}
          height={height}
          size={size}
          disabled={disabled}
        />
      </Styled.Slider>
    );
  }, [checked, disabled, height, size, width]);

  const handleToggle = useCallback(
    (e) => {
      if (disabled) {
        return doNothing();
      }
      return onChange?.(e);
    },
    [disabled, onChange],
  );

  return (
    <Styled.Container
      className={cx("switch", className)}
      onClick={handleToggle}
    >
      {customPreText}
      {slider}
      {customPostText}
    </Styled.Container>
  );
};

export default Switch;
