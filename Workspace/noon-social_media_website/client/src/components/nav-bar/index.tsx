"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";

interface Props {
  navBarArgs: Array<{
    id: number,
    title: string,
    url: string,
    defaultIcon: React.JSX.Element,
    selectedIcon: React.JSX.Element,
  }>,
}

const NavBar = (props: Props) => {
  const { navBarArgs } = props;
  const linkPathName = usePathname();
  const [selectedLink, setSelectedLink] = useState<string>();

  useEffect(() => {
    setSelectedLink(linkPathName);
  }, [linkPathName]);

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarLinkItemsBox}>
        {navBarArgs.map((arg) => (
          <Link
            key={arg.id}
            href={arg.url}
            className={
              `${styles.navBarLinkItem} ${selectedLink === arg.url && styles.navBarLinkItemSelected}`
            }
          >
            <div className={styles.navBarLinkItemIconSection}>
              {selectedLink === arg.url ? arg.selectedIcon : arg.defaultIcon}
            </div>
            <div className={styles.navBarLinkItemTextSection}>
              {arg.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
