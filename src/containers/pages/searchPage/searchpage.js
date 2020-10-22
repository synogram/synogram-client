import React from "react";
import styles from "./searchpage.module.scss";

import Searchbar from "../../../components/SearchBar/searchbar";

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.placeholder}>LOGO</div>
        <div className={styles.main}>
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default SearchPage;
