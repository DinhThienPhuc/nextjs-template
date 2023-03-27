import useEventListener from "./useEventListener";

type Handler = (event: MouseEvent) => void;

const useClickAnyWhere = (handler: Handler) => {
  useEventListener("click", (event: MouseEvent) => {
    handler(event);
  });
};

export default useClickAnyWhere;
