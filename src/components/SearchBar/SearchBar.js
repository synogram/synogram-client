import React, { Component } from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../assets/icons/synogramIcon.svg";
import messages from "../../constants/Messages";

class SearchBar extends Component {
  state = {
    focusWithinDiv: false,
  };

  searchInputId = "search_input";

  getElementById = (id) => {
    try {
      return document.getElementById(id);
    } catch (error) {
      console.log("Unable to find Element by ID:" + error);
    }
    return;
  };

  handleOnEnter = (event) => {
    event.preventDefault();
    // TODO: IMPLEMENT ON ENTER (SEARCH)
  };

  handleOnFocusInput = (event) => {
    event.target.placeholder = "";
  };

  handleOnBlurInput = (event) => {
    event.target.placeholder = messages.searchPlaceHolder;
  };

  handleOnFocusDiv = () => {
    this.setState({ focusWithinDiv: true });
    this.getElementById(this.searchInputId).focus();
  };

  handleOnBlurDiv = () => {
    this.setState({ focusWithinDiv: false });
  };

  render() {
    // If parent div lost focus, search btn should be restored to its original position
    const transitionClass = this.state.focusWithinDiv
      ? styles.searchButton_translate
      : styles.searchButton_normal;

    const searchbarSize = this.props.barsize ? styles.big : styles.small;

    return (
      <div
        className={[searchbarSize, styles.searchbarContainer].join(" ")}
        onFocus={() => this.handleOnFocusDiv()}
        onBlur={() => this.handleOnBlurDiv()}
      >
        <form
          className={styles.searchBar}
          onSubmit={(event) => this.handleOnEnter(event)}
        >
          <input
            type="text"
            spellCheck="false"
            id={this.searchInputId}
            placeholder={messages.searchPlaceHolder}
            onFocus={(event) => this.handleOnFocusInput(event)}
            onBlur={(event) => this.handleOnBlurInput(event)}
            autoComplete="off"
          />
        </form>
        <button className={[styles.searchButton, transitionClass].join(" ")}>
          <img src={searchIcon} className={styles.searchIcon} />
        </button>
      </div>
    );
  }
}

export default SearchBar;
