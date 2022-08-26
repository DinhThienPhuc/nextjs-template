import { MouseEventHandler, ReactNode, useMemo } from "react";

import Styled from "./switch.style";
import cx from "classnames";

/* GALLERY COMPONENT: SWITCH - https://www.w3schools.com/howto/howto_css_switch.asp
   ========================================================================== */

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
      <Styled.Slider className="slider" width={width} height={height}>
        <Styled.Track
          className="track"
          checked={checked}
          width={width}
          height={height}
        />
        <Styled.Circle
          className="circle"
          checked={checked}
          width={width}
          height={height}
          size={size}
        />
      </Styled.Slider>
    );
  }, [checked, height, size, width]);

  return (
    <Styled.Container className={cx("switch", className)} onClick={onChange}>
      {customPreText}
      {slider}
      {customPostText}
    </Styled.Container>
  );
};

export default Switch;
