/* GALLERY COMPONENT: ALERT - https://www.w3schools.com/howto/howto_js_alert.asp
   ========================================================================== */

import { DEFAULT_PROPS, IProps, SEVERITY_ICON_DICTIONARY } from "./alert.utils";
import { useCallback, useMemo, useState } from "react";

import Icons from "assets/icons";
import Styled from "./alert.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const Alert = (props: IProps) => {
  const {
    className,
    children,
    title,
    icon,
    action,
    severity = DEFAULT_PROPS.severity,
    variant = DEFAULT_PROPS.variant,
    onClose,
  } = props;

  const [isClosed, setClose] = useState<boolean>(false);

  const customTitle = useMemo(() => {
    if (!title) {
      return null;
    }
    return <Styled.Title className="alert-title">{title}</Styled.Title>;
  }, [title]);

  const customIcon = useMemo(() => {
    if (icon) {
      return <Styled.Icon className="alert-icon">{icon}</Styled.Icon>;
    }
    return (
      <Styled.Icon className="alert-icon" severity={severity}>
        {SEVERITY_ICON_DICTIONARY[severity]()}
      </Styled.Icon>
    );
  }, [icon, severity]);

  const handleClose = useCallback(() => {
    setClose(true);
    onClose?.();
  }, [onClose]);

  const customTailAction = useMemo(() => {
    if (action) {
      return action;
    }
    if (onClose) {
      return (
        <Styled.Icon
          className="alert-icon alert-icon-tail"
          onClick={handleClose}
        >
          <Icons.X />
        </Styled.Icon>
      );
    }
    return null;
  }, [action, handleClose, onClose]);

  useWhyDidYouUpdate("Alert", props);

  return (
    <Styled.Alert
      className={cx("alert", className)}
      severity={severity}
      hasTitle={!!title}
      variant={variant}
      isClosed={isClosed}
    >
      <div className="alert-panel-left">
        {customIcon}
        <Styled.Content>
          {customTitle}
          {children}
        </Styled.Content>
      </div>
      <span className="alert-panel-right">{customTailAction}</span>
    </Styled.Alert>
  );
};

export default Alert;
