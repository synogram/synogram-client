import React from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../assets/icons/searchIcon.svg";
import messages from "../../constants/Messages";

const SearchBar = () => {
  const handleOnEnter = (event) => {
    event.preventDefault();

    // TODO: IMPLEMENT ON ENTER (SEARCH)
  };

  const handleOnFocus = (event) => {
    event.target.placeholder = "";
  };

  const handleOnBlur = (event) => {
    event.target.placeholder = messages.searchPlaceHolder;
  };

  return (
    <div className={styles.searchbarContainer}>
      <form
        className={styles.searchBar}
        onSubmit={(event) => handleOnEnter(event)}
      >
        <input
          type="text"
          spellCheck="false"
          placeholder={messages.searchPlaceHolder}
          onFocus={(event) => handleOnFocus(event)}
          onBlur={(event) => handleOnBlur(event)}
        />
      </form>
      <button className={styles.searchButton}>
        <img src={searchIcon} className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
