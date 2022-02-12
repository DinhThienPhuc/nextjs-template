/* GALLERY COMPONENT: ACCORDION - https://www.w3schools.com/howto/howto_js_accordion.asp
   ========================================================================== */

import { ReactNode, useCallback, useMemo, useState } from "react";

import Styled from "./accordion.style";
import cx from "classnames";

interface IPanel {
  label: ReactNode | string;
  value: ReactNode | string;
}

interface IProps {
  panels: IPanel[];
  className?: string;
  canMultiOpen?: boolean;
}

const Accordion = ({ panels, className, canMultiOpen = false }: IProps) => {
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

  const handleToggleMutliPanels = useCallback(
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

  const renderContent = useMemo(() => {
    return panels.map((panel, index) => {
      return (
        <div key={index}>
          <Styled.Label
            onClick={
              canMultiOpen
                ? handleToggleMutliPanels(index)
                : handleTogglePanel(index)
            }
          >
            {panel.label}
          </Styled.Label>
          <Styled.Value isOpen={isActivated.includes(index)}>
            {panel.value}
          </Styled.Value>
        </div>
      );
    });
  }, [
    canMultiOpen,
    handleToggleMutliPanels,
    handleTogglePanel,
    isActivated,
    panels,
  ]);

  return (
    <Styled.Accordion className={cx("accordion", className)}>
      {renderContent}
    </Styled.Accordion>
  );
};

export default Accordion;
