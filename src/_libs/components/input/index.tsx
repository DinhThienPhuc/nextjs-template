import { forwardRef, useMemo } from "react";

import HelperText from "../helper-text";
import { IInputProps } from "./types";
import { INPUT_VARIANT } from "./constants";
import Label from "../label";
import PostAdorment from "../post-adorment";
import PreAdorment from "../pre-adorment";
import Styled from "./style";
import cx from "classnames";
import { useFocusWithCallback } from "@iris/hooks";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      label = "",
      preAdorment = null,
      postAdorment = null,
      helperText = "",
      value = "",
      required = false,
      disabled = false,
      hiddenLabel = false,
      fullWidth = false,
      variant = INPUT_VARIANT.STANDARD,
      onFocus,
      onBlur,
      clear,
      ...props
    },
    ref,
  ) => {
    const { captureOnFocus, captureOnBlur, isFocused } = useFocusWithCallback(
      onFocus,
      onBlur,
    );

    const isLabelCollapsed = useMemo(() => {
      if (isFocused) {
        return true;
      }
      if (!!preAdorment || !!value) {
        return true;
      }
      return false;
    }, [isFocused, preAdorment, value]);

    return (
      <Styled.Container
        fullWidth={fullWidth}
        variant={variant}
        disabled={disabled}
        className={cx(
          "input-container",
          `input-container-fullwidth__${fullWidth}`,
          `input-container__${variant}`,
          className,
        )}
      >
        <Label
          variant={variant}
          disabled={disabled}
          isLabelCollapsed={isLabelCollapsed}
          content={label}
          required={required}
          hiddenLabel={hiddenLabel}
        />
        <PreAdorment variant={variant} content={preAdorment} />
        <Styled.Input
          {...props}
          variant={variant}
          value={value}
          ref={ref}
          disabled={disabled}
          required={required}
          onFocus={captureOnFocus}
          onBlur={captureOnBlur}
          hasPreAdorment={!!preAdorment}
          hasPostAdorment={!!clear || !!postAdorment}
          className={cx("input-box", `input-box__${variant}`)}
        />
        <PostAdorment variant={variant} content={postAdorment} clear={clear} />
        <HelperText text={helperText} variant={variant} />
      </Styled.Container>
    );
  },
);

Input.displayName = "Input";

export default Input;
