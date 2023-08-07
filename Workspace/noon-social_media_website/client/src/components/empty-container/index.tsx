import React from "react";
import styles from "./index.module.scss";
import EmptyBox from "@/assets/images/empty-box.png";
import Image from "next/image";

const EmptyContainer = () => {
  return (
    <div className={styles.emptyContainer}>
      <Image
        src={EmptyBox}
        width={150}
        height={150}
        className={styles.emptyContainerImage}
        alt="empty-box"
        title="Empty box image"
      />
      <div className={styles.emptyContainerText}>
        No liked posts
      </div>
    </div>
  );
};

export default EmptyContainer;
