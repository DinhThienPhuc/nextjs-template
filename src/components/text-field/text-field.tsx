/* COMPONENT: TEXT_FIELD
   ========================================================================== */

import { InputHTMLAttributes, ReactNode } from "react";

import Styled from "./text-field.style";
import cx from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  preIcon?: ReactNode | string | null;
  postIcon?: ReactNode | string | null;
}

const TextField = ({ className, preIcon, postIcon, ...props }: IProps) => {
  return (
    <Styled.TextField className={cx(className)}>
      {preIcon ? (
        <Styled.PreIcon className={"input-pre-icon"}>{preIcon}</Styled.PreIcon>
      ) : null}
      <Styled.Input
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
    </Styled.TextField>
  );
};

export default TextField;
