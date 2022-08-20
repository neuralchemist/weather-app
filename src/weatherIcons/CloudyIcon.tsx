import { ReactComponent as SVG } from "./cloudy.svg";

import styles from "./style.module.css";

function CloudyIcon() {
  return <SVG className={styles.icon} />;
}

export default CloudyIcon;
