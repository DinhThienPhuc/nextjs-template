/* GALLERY COMPONENT: SWITCH - https://www.w3schools.com/howto/howto_css_switch.asp
   ========================================================================== */

import { DEFAULT_PROPS, IProps } from "./switch.utils";
import { useCallback, useMemo } from "react";

import Styled from "./switch.style";
import cx from "classnames";
import { doNothing } from "utils/functions";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const Switch = (props: IProps) => {
  const {
    className,
    width = DEFAULT_PROPS.width,
    height = DEFAULT_PROPS.height,
    size = DEFAULT_PROPS.size,
    disabled = DEFAULT_PROPS.disabled,
    preText,
    postText,
    checked,
    onChange,
  } = props;

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
        checked={checked}
        size={size}
      >
        <div className="track" />
        <div className="circle" />
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

  useWhyDidYouUpdate("Switch", props);

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
