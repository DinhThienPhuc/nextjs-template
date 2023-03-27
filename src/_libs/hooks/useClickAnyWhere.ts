import useEventListener from "_libs/hooks/useEventListener";

type Handler = (event: MouseEvent) => void;

export const useClickAnyWhere = (handler: Handler) => {
  useEventListener("click", (event: MouseEvent) => {
    handler(event);
  });
};
