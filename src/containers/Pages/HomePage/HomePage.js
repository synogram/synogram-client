import React from "react";
import styles from "./HomePage.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";
import messages from "../../../constants/Messages";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import NavBar from "../../../components/NavBar/Navbar";

class HomePage extends React.Component {
  state = {
    scrollbarVisible: false,
  };

  componentDidMount() {
    if (
      this.getElementById("Magnifying_Glass").clientHeight >
        document.body.clientHeight ||
      document.body.scrollHeight > document.body.clientHeight
    ) {
      this.setState({ scrollbarVisible: true });
    }
  }
  getElementById = (id) => {
    try {
      return document.getElementById(id);
    } catch (error) {
      console.log("Element not found: " + error);
    }
  };

  render() {
    const scrollbarHomepage = this.state.scrollbarVisible
      ? {
          minHeight:
            Math.max(
              this.getElementById("Magnifying_Glass").clientHeight,
              document.body.scrollHeight
            ) + "px",
        }
      : {};

    return (
      <div className={styles.homepage} style={scrollbarHomepage}>
        <div id={"Magnifying_Glass"} className={styles.magnify_glass_container}>
          <div className={styles.outer_glass} />
          <div className={styles.inner_glass} />
          <div className={styles.glass_handle} />
        </div>

        <div className={styles.content_container}>
          <NavBar className={styles.homepage_navbar} />
          <div className={styles.homepage_title}>
            <h1>
              SYN
              <img
                src={searchIcon}
                className={styles.searchIconHomepage}
                alt={"synogram icon"}
              ></img>
              GRAM
            </h1>
          </div>
          <SearchBar />
          <div className={styles.homepage_description}>
            <p>{messages.front_page_description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
