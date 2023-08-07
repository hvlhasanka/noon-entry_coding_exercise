import React from "react";
import RingLoadingSpinner from "@/assets/loading-spinner/ring-loading-spinner.svg";
import Image from "next/image";
import styles from "./index.module.scss";

const LoadingSpinner = () => {
  return (
    <div>
      <Image
        src={RingLoadingSpinner}
        width={50}
        height={50}
        alt="loading-spinner"
        className={styles.loadingSpinner}
      />
    </div>
  );
};

export default LoadingSpinner;
