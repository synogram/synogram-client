import React from "react";
import styles from "./searchbar.module.css";

import SearchIcon from "../../assets/icons/icons8-search.svg";

class Searchbar extends React.Component {
  render() {
    return (
      <div className={styles.searchbarDiv}>
        <input type="text" placeholder="input text"></input>
        <div className={styles.searchIcon}>
          <img alt="search" src={SearchIcon}></img>
        </div>
      </div>
    );
  }
}

export default Searchbar;
