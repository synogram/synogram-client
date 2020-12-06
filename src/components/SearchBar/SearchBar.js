import React, { Component } from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../assets/icons/synogramIcon.svg";
import messages from "../../constants/Messages";
import axios from "axios";
import { getRelatedWords, getSummary } from "../../utilities/axios/apiHandler";

class SearchBar extends Component {
  state = {
    focusWithinDiv: false,
    input: ""
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

  handleInput = (event) => {
    event.preventDefault();
    this.setState({input: event.target.value});
  }

  handleOnEnter = (event) => {
    event.preventDefault();
    getRelatedWords(this.state.input, 2);
    getSummary(this.state.input)
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
    return (
      <div
        className={styles.searchbarContainer}
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
            onChange={(event) => this.handleInput(event)}
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
