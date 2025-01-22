import React, { lazy, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { retry } from "../common/commonFunctions";

const LandingPage = lazy(() => retry(() => import("../pages/LandingPage")));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);
  return routes;
};

export default Routes;
