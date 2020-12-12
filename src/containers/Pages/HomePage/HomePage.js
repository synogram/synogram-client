import React from "react";
import styles from "./HomePage.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";
import messages from "../../../constants/Messages";
import NavBar from "../../../components/NavBar/Navbar";
import { connect } from "react-redux";
import { RESET_REDUX_STATE } from "../../../store/actions/actionTypes";
import Logo from "../../../components/Logo/Logo"

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
    
    // If you return to the homepage. The redux state has to reset.
    this.props.resetRedux();
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
          <Logo/>          
          <SearchBar isSmall = {false}/>
          <div className={styles.homepage_description}>
            <p>{messages.front_page_description}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    resetRedux: () => dispatch({type: RESET_REDUX_STATE})
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
