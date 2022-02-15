/* GALLERY COMPONENT: TABS
      https://www.w3schools.com/howto/howto_js_tabs.asp, 
      https://www.w3schools.com/howto/howto_js_vertical_tabs.asp
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
  isVertical?: boolean;
}

const Tabs = ({ className, panels, isVertical = false }: IProps) => {
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
          isVertical={isVertical}
          isActivated={isActivated === index}
          onClick={handleSelectTab(index)}
          className="label"
        >
          {panel.label}
        </Styled.TabLabel>
      );
    });
  }, [handleSelectTab, isActivated, isVertical, panels]);

  const renderTabContents = useMemo(() => {
    return panels[isActivated]?.content;
  }, [isActivated, panels]);

  return (
    <Styled.Tabs className={cx("tabs", className)}>
      <Styled.TabLabels isVertical={isVertical} className="labels">
        {renderTabLabels}
      </Styled.TabLabels>
      <Styled.TabContent className="content" isVertical={isVertical}>
        {renderTabContents}
      </Styled.TabContent>
    </Styled.Tabs>
  );
};

export default Tabs;
