import React from "react";
// custom components
import { StyledBlueSky, StarBackground, StyledComet } from "./styledComponents";

type Props = {
  children: React.ReactNode;
};

function StarrySky({ children }: Props) {
  return (
    <StyledBlueSky>
      <StarBackground>
        <StyledComet />
        {children}
      </StarBackground>
    </StyledBlueSky>
  );
}

export default StarrySky;
