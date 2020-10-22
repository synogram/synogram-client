import React from "react";
import styles from "./searchbar.module.scss";

import SearchIcon from "../../assets/icons/icons8-search.svg";
import { getRelatedWords } from "../../utilities/axios/apiHandler";

class Searchbar extends React.Component {
  state = {
    searchContext: "",
  };

  updateInputValue = (evt) => {
    this.setState({ searchContext: evt.target.value });
  };

  handleSearch = (evt) => {
    evt.preventDefault();
    const relatedWords = getRelatedWords({
      searchTerm: this.state.searchContext,
    });
    console.log(relatedWords);
  };

  render() {
    return (
      <div className={styles.searchbarDiv}>
        <form
          className={styles.searchBarForm}
          onSubmit={(evt) => this.handleSearch(evt)}
        >
          <input
            type="text"
            placeholder="input text"
            onChange={(evt) => this.updateInputValue(evt)}
          ></input>
          <div className={styles.searchButton}>
            <button type="submit">
              <img alt="search" src={SearchIcon}></img>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
