import { ReactComponent as SVG } from "./partly-cloudy.svg";
import styles from "./style.module.css";

function PartlyCloudyIcon() {
  return <SVG className={styles.icon} />;
}

export default PartlyCloudyIcon;
