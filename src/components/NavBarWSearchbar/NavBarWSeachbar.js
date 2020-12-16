import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBarWSeachbar.module.scss";
import icon from "../../assets/icons/synogramIcon.svg";
import { withRouter } from "react-router-dom";

const NavBarWSeachbar = (props) => {
  const onClickIcon = () => {
    props.history.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon} onClick={onClickIcon}>
        <img src={icon} />
      </div>
      {!props.isSearchBarHidden && <SearchBar isSmall={true} />}
      <div className={styles.sidedrawer_toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default withRouter(NavBarWSeachbar);
