import { IPortalProps } from "./types";
import { createPortal } from "react-dom";
import { useEffectOnce } from "_libs/hooks";
import { useRef } from "react";

export const Portal = ({ children, id }: IPortalProps) => {
  const element = useRef<HTMLDivElement | null>(null);
  const elementContainer = useRef<HTMLDivElement | null>(null);

  useEffectOnce(() => {
    const portalRoot = document.getElementById("portal-root") as HTMLDivElement;

    if (!element.current) {
      element.current = document.createElement("div");
    }

    if (!elementContainer.current) {
      elementContainer.current = document.createElement("div");
      elementContainer.current.id = id;
    }

    elementContainer.current?.appendChild(element.current!);
    portalRoot.appendChild(elementContainer.current!);
    return () => {
      portalRoot.removeChild(elementContainer.current!);
    };
  });

  return createPortal(children, elementContainer.current!);
};
