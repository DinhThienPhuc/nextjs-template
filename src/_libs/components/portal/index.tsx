import { IPortalProps } from "./types";
import React from "react";
import { createPortal } from "react-dom";
import { useEffectOnce } from "@phantomthief/react-mui.hooks";

export const Portal = ({ children, id }: IPortalProps) => {
  const element = React.useRef<HTMLDivElement | null>(null);
  const elementContainer = React.useRef<HTMLDivElement | null>(null);

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
