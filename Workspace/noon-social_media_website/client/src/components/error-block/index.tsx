import styles from "./index.module.scss";
import { VscError } from "react-icons/vsc";

interface Props {
  label: string;
}

const ErrorBlock = (props: Props) => {
  const { label } = props;

  return (
    <div className={styles.errorBlockContent}>
      <div className={styles.errorBlockErrorIcon}>
        <VscError />
      </div>
      <p className={styles.errorBlockLabel}>
        {label}
      </p>
    </div>
  );
};

export default ErrorBlock;
