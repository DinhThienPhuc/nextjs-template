import { Navigate, useLocation } from "react-router-dom";
import React, { useMemo } from "react";

import { BASE_ROUTES } from "./base-routes";
import { IAuthenticatorProps } from "./types";

export const Authenticator = ({
  children,
  isAuthenticated = false,
  extendRoutes,
  routeToGoWhenUnauthenticated,
  routeToGoWhenAuthenticated,
}: IAuthenticatorProps) => {
  const location = useLocation();

  const routes = useMemo(() => {
    return {
      ...BASE_ROUTES,
      ...extendRoutes,
    };
  }, [extendRoutes]);

  if (isAuthenticated && location.pathname === routes.LOGIN) {
    if (routeToGoWhenAuthenticated) {
      return <Navigate to={routeToGoWhenAuthenticated} />;
    }
    return <Navigate to={routes.HOME} />;
  }

  if (!isAuthenticated && location.pathname !== routes.LOGIN) {
    if (routeToGoWhenUnauthenticated) {
      return <Navigate to={routeToGoWhenUnauthenticated} />;
    }
    return <Navigate to={routes.LOGIN} />;
  }

  return children;
};
