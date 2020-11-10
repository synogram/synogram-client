import React from "react";
import styles from "./HomePage.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default HomePage;
