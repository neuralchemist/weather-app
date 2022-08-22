import { ReactComponent as SVG } from "./partly-cloudy.svg";
// custom components
import { StyledIcon } from "./styledComponents";

function PartlyCloudyIcon() {
  return (
    <StyledIcon>
      <SVG />
    </StyledIcon>
  );
}

export default PartlyCloudyIcon;
