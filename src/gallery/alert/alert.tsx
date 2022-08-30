/* GALLERY COMPONENT: ALERT - https://www.w3schools.com/howto/howto_js_alert.asp
   ========================================================================== */

import { DEFAULT_PROPS, IProps, SEVERITY_ICON_DICTIONARY } from "./alert.utils";

import Icons from "assets/icons";
import Styled from "./alert.style";
import cx from "classnames";
import { useMemo } from "react";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const Alert = (props: IProps) => {
  const {
    className,
    children,
    title,
    icon,
    // action,
    severity = DEFAULT_PROPS.severity,
    // variant = DEFAULT_PROPS.variant,
    onClose,
  } = props;

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
      <Styled.Icon className="alert-icon">
        {SEVERITY_ICON_DICTIONARY[severity]()}
      </Styled.Icon>
    );
  }, [icon, severity]);

  const customTailAction = useMemo(() => {
    if (onClose) {
      return (
        <Styled.Icon className="alert-icon alert-icon-tail">
          <Icons.X />
        </Styled.Icon>
      );
    }
  }, [onClose]);

  useWhyDidYouUpdate("Alert", props);

  return (
    <Styled.Alert
      className={cx("alert", className)}
      severity={severity}
      hasTitle={!!title}
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
