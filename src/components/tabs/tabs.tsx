/* COMPONENT: TABS
      https://www.w3schools.com/howto/howto_js_tabs.asp, 
      https://www.w3schools.com/howto/howto_js_vertical_tabs.asp
   ========================================================================== */

import { DEFAULT_PROPS, IProps } from "./tabs.utils";
import { useCallback, useMemo, useState } from "react";

import Styled from "./tabs.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const Tabs = (props: IProps) => {
  const { className, panels, isVertical = DEFAULT_PROPS.isVertical } = props;
  const [isActivated, setActive] = useState(0);

  const handleSelectTab = useCallback((index: number) => {
    return () => {
      setActive(index);
    };
  }, []);

  const tabLabels = useMemo(() => {
    return panels.map((panel, index) => {
      return (
        <Styled.TabLabel
          key={panel.id}
          isVertical={isVertical}
          isActivated={isActivated === index}
          onClick={handleSelectTab(index)}
          disabled={!!panel?.disabled}
          className="label"
        >
          {panel.label}
        </Styled.TabLabel>
      );
    });
  }, [handleSelectTab, isActivated, isVertical, panels]);

  const tabContents = useMemo(() => {
    return panels[isActivated]?.content;
  }, [isActivated, panels]);

  useWhyDidYouUpdate("Tabs", props);

  return (
    <Styled.Tabs className={cx("tabs", className)}>
      <Styled.TabLabels className="labels" isVertical={isVertical}>
        {tabLabels}
      </Styled.TabLabels>
      <Styled.TabContent className="content" isVertical={isVertical}>
        {tabContents}
      </Styled.TabContent>
    </Styled.Tabs>
  );
};

export default Tabs;