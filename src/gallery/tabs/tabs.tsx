/* GALLERY COMPONENT: TABS - https://www.w3schools.com/howto/howto_js_tabs.asp
   ========================================================================== */

import { ReactNode, useCallback, useMemo, useState } from "react";

import Styled from "./tabs.style";
import cx from "classnames";

interface IPanel {
  label: ReactNode | string;
  content: ReactNode | string;
  id: string;
}

interface IProps {
  panels: IPanel[];
  className?: string;
}

const Tabs = ({ className, panels }: IProps) => {
  const [isActivated, setActive] = useState(0);

  const handleSelectTab = useCallback((index: number) => {
    return () => {
      setActive(index);
    };
  }, []);

  const renderTabLabels = useMemo(() => {
    return panels.map((panel, index) => {
      return (
        <Styled.TabLabel
          key={panel.id}
          isActivated={isActivated === index}
          onClick={handleSelectTab(index)}
        >
          {panel.label}
        </Styled.TabLabel>
      );
    });
  }, [handleSelectTab, isActivated, panels]);

  const renderTabContents = useMemo(() => {
    return panels[isActivated]?.content;
  }, [isActivated, panels]);

  return (
    <div className={cx("tabs", className)}>
      <Styled.TabLabels>{renderTabLabels}</Styled.TabLabels>
      <Styled.TabContent>{renderTabContents}</Styled.TabContent>
    </div>
  );
};

export default Tabs;
