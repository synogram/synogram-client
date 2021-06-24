import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBarWSeachbar.module.scss";
import {withRouter} from "react-router-dom";
import Logo from "../Logo/Logo";
const NavBarWSeachbar = (props) => {
  const onClickIcon = () => {
    props.history.push("/");
  };

  return (
    <div className={styles.container}>
      <Logo
        styles={styles.Logo}
        returnHome={() => {
          onClickIcon();
        }}
      />
      {props.isSearchBarHidden ? null : (
        <SearchBar isSmall={true} styles={styles.searchbar} />
      )}
    </div>
  );
};

export default withRouter(NavBarWSeachbar);
