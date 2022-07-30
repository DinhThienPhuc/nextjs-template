import { useCallback, useState } from "react";

import { ErrorResponse } from "services/axios-requests/requests";
import useEffectOnce from "./useEffectOnce";

interface IState {
  loading: boolean;
  error: ErrorResponse | null;
  data: any;
}

const INIT_STATE: IState = {
  loading: false,
  error: null,
  data: null,
};

// requestPromise: Promise<AxiosResponse>

const useAxiosRequest = (url: string, apiCall: any, params?: any) => {
  const [state, setState] = useState<IState>(INIT_STATE);

  const fetch = useCallback(async () => {
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      const response = await apiCall?.(url, params);
      setState((prev) => ({
        ...prev,
        loading: false,
        data: response.data,
        error: null,
      }));
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error,
        data: null,
      }));
    }
  }, [apiCall, params, url]);

  useEffectOnce(() => {
    fetch();
  });

  return state;
};

export default useAxiosRequest;
