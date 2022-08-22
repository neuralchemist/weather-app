import { ReactComponent as SVG } from "./cloudy.svg";
// custom components
import { StyledIcon } from "./styledComponents";

function CloudyIcon() {
  return (
    <StyledIcon>
      <SVG />
    </StyledIcon>
  );
}

export default CloudyIcon;
