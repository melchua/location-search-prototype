import React from "react";
import LocationSelector from "./LocationSelector";
import styles from "./SearchBar.module.css";

const SearchBar = () => (
  <div className={styles.container}>
    <LocationSelector />
  </div>
);

export default SearchBar;
