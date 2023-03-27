import { useEffect, useRef } from "react";

import { IPortalProps } from "./types";
import { createPortal } from "react-dom";

const portalRoot = document.getElementById("portal-root") as HTMLDivElement;

export const Portal = ({ children, id }: IPortalProps) => {
  const element = useRef<HTMLDivElement | null>(null);
  const elementContainer = useRef<HTMLDivElement | null>(null);

  if (!element.current) {
    element.current = document.createElement("div");
  }

  if (!elementContainer.current) {
    elementContainer.current = document.createElement("div");
    elementContainer.current.id = id;
  }

  useEffect(() => {
    elementContainer.current?.appendChild(element.current!);
    portalRoot.appendChild(elementContainer.current!);
    return () => {
      portalRoot.removeChild(elementContainer.current!);
    };
  }, []);

  return createPortal(children, elementContainer.current!);
};
