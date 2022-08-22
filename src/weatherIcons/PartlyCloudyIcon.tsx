import { ReactComponent as SVG } from "./partly-cloudy.svg";
// custom components
import { StyledIcon } from "./styledComponents";

import styles from "./style.module.css";

function PartlyCloudyIcon() {
  return (
    <StyledIcon>
      <SVG />
    </StyledIcon>
  );
}

export default PartlyCloudyIcon;
