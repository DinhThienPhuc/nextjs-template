import { IObject } from "@phantomthief/react-mui.utils";

export interface IAuthenticatorProps {
  children: JSX.Element;
  isAuthenticated?: boolean;
  extendRoutes?: IObject<string>;
  routeToGoWhenUnauthenticated?: string;
  routeToGoWhenAuthenticated?: string;
}
