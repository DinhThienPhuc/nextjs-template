import { InputHTMLAttributes, ReactNode } from "react";

import Styled from "./index.style";
import cx from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  preIcon?: ReactNode | string | null;
  postIcon?: ReactNode | string | null;
}

const Input = ({ className, preIcon, postIcon, ...props }: IProps) => {
  return (
    <Styled.Input className={cx(className)}>
      {preIcon ? (
        <Styled.PreIcon className={"input-pre-icon"}>{preIcon}</Styled.PreIcon>
      ) : null}
      <Styled.InputBox
        {...props}
        className={"input-box"}
        hasPreIcon={!!preIcon}
        hasPostIcon={!!postIcon}
      />
      {postIcon ? (
        <Styled.PostIcon className={"input-post-icon"}>
          {postIcon}
        </Styled.PostIcon>
      ) : null}
    </Styled.Input>
  );
};

export default Input;
