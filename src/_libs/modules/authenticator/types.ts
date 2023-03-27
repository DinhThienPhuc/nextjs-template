import { IObject } from "_libs/utils";

export interface IAuthenticatorProps {
  children: JSX.Element;
  isAuthenticated?: boolean;
  extendRoutes?: IObject<string>;
  routeToGoWhenUnauthenticated?: string;
  routeToGoWhenAuthenticated?: string;
}
