import React from "react";
import { useLocation } from "react-router";
import { StyledSection } from "./Style";
const Page404 = () => {
  const prevRoute = useLocation(100);
  return (
    <StyledSection>
      404 '<u>{prevRoute.pathname}</u>' not found
    </StyledSection>
  );
};

export { Page404 };
