import { ILabelProps } from "./types";
import { LABEL_VARIANT } from "./constants";
import { Styled } from "./style";
import cx from "classnames";

export const Label = ({
  className,
  content = "",
  required = false,
  disabled = false,
  hiddenLabel = false,
  variant = LABEL_VARIANT.STANDARD,
  isLabelCollapsed,
}: ILabelProps) => {
  if (hiddenLabel) {
    return null;
  }

  return (
    <Styled.Container
      variant={variant}
      disabled={disabled}
      isLabelCollapsed={isLabelCollapsed}
      className={cx(
        "label-container",
        `label-container__${variant}`,
        `label-container-collapsed__${isLabelCollapsed}`,
        `label-container-disabled__${disabled}`,
        className,
      )}
    >
      {content} {required ? "*" : ""}
    </Styled.Container>
  );
};
