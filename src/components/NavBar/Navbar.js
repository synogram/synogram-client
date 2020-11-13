import React from "react";
import { UI_NAVBAR_ITEM } from "../../constants/Constants";
import styles from "./Navbar.module.scss";
import NavItems from "./NavItems/NavItems";

const NavBar = (props) => {
  const supportedNavItem = [UI_NAVBAR_ITEM.HOME, UI_NAVBAR_ITEM.ABOUT];

  return (
    <header className={styles.navContainer}>
      <NavItems supportedTabs={supportedNavItem} />
    </header>
  );
};

export default NavBar;
