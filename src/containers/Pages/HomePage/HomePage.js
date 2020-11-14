import React from "react";
import styles from "./HomePage.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";
import messages from "../../../constants/Messages";
import searchIcon from "../../../assets/icons/searchIcon.svg";

class HomePage extends React.Component {
    render() {
        return (
            <div className={styles.homepage}>
                <div className={styles.magnify_glass_container}>
                    <div className={styles.magnify_glass}>
                        <div className={styles.inner_glass}/>
                        <div className={styles.glass_handle}/>
                    </div>
                </div>
                <h1 className={styles.homepage_title}>SYN<img src={searchIcon}
                                                              className={styles.searchIconHomepage} alt={"synogram icon"}></img>GRAM</h1>
                <SearchBar/>
                <div className={styles.homepage_description}><p>{messages.front_page_description}</p></div>
            </div>
        );
    }
}

export default HomePage;
