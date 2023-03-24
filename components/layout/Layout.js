import { useState } from "react";
import NavBar from "./NavBar";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import styles from "/styles/Layout.module.css";

const Layout = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className={styles.layoutContainer}>
      <NavBar />
      <SearchBar
        searchValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onBack={() => setSearchValue("")}
      />
      {searchValue === "" ? (
        children
      ) : (
        <SearchResults searchValue={searchValue} />
      )}
    </main>
  );
};

export default Layout;
