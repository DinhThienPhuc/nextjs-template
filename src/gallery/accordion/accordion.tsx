/* COMPONENT: ACCORDION - https://www.w3schools.com/howto/howto_js_accordion.asp
   ========================================================================== */

import { DEFAULT_PROPS, IPanel, IProps } from "./accordion.utils";
import { useCallback, useMemo, useState } from "react";

import Icons from "assets/icons";
import Styled from "./accordion.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const Accordion = (props: IProps) => {
  const {
    panels,
    className,
    canMultiOpen = DEFAULT_PROPS.canMultiOpen,
    expandItem,
  } = props;
  const [isActivated, setActive] = useState<number[]>([]);

  const handleTogglePanel = useCallback(
    (panelIndex: number) => {
      return () => {
        if (isActivated.includes(panelIndex)) {
          setActive([]);
        } else {
          setActive([panelIndex]);
        }
      };
    },
    [isActivated],
  );

  const handleToggleMultiPanels = useCallback(
    (panelIndex: number) => {
      return () => {
        if (isActivated.includes(panelIndex)) {
          const panelsAfterRemoved = isActivated.filter(
            (i) => i !== panelIndex,
          );
          setActive(panelsAfterRemoved);
        } else {
          setActive([...isActivated, panelIndex]);
        }
      };
    },
    [isActivated],
  );

  const renderItem = useCallback(
    (panel: IPanel, index: number) => {
      return (
        <Styled.Panel
          key={index}
          disabled={!!panel?.disabled}
          isOpen={isActivated.includes(index)}
        >
          <div
            className="accordion-label"
            onClick={
              canMultiOpen
                ? handleToggleMultiPanels(index)
                : handleTogglePanel(index)
            }
          >
            <div>{panel.label}</div>
            <div>
              {panel?.expandItem ?? expandItem ?? (
                <div className="accordion-expand-icon">
                  <Icons.ChevronDown width={18} height={18} />
                </div>
              )}
            </div>
          </div>
          <div className="accordion-value">{panel.value}</div>
        </Styled.Panel>
      );
    },
    [
      canMultiOpen,
      expandItem,
      handleToggleMultiPanels,
      handleTogglePanel,
      isActivated,
    ],
  );

  const content = useMemo(() => {
    return panels.map(renderItem);
  }, [panels, renderItem]);

  useWhyDidYouUpdate("Accordion", props);

  return (
    <Styled.Accordion className={cx("accordion", className)}>
      {content}
    </Styled.Accordion>
  );
};

export default Accordion;
