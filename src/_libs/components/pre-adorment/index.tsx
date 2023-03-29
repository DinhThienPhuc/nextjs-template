import { IPreAdormentProps } from "./types";
import { PRE_ADORMENT_VARIANT } from "./constants";
import React from "react";
import { Styled } from "./style";
import cx from "classnames";

export const PreAdorment = ({
  className,
  content = null,
  variant = PRE_ADORMENT_VARIANT.STANDARD,
}: IPreAdormentProps) => {
  if (!content) {
    return null;
  }

  return (
    <Styled.Container
      variant={variant}
      className={cx(
        "pre-adorment-container",
        `pre-adorment-container__${variant}`,
        className,
      )}
    >
      {content}
    </Styled.Container>
  );
};
