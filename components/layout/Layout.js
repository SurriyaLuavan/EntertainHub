import { useState } from "react";
import NavBar from "./NavBar";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import styles from "/styles/Layout.module.css";
import AlertProvider from "../context/AlertProvider";
import AlertCard from "../AlertCard";
import ShowProvider from "../context/ShowProvider";
import data from "/data.json";

const Layout = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <AlertProvider>
      <ShowProvider data={data}>
        <main className={styles.layoutContainer}>
          <AlertCard />
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
      </ShowProvider>
    </AlertProvider>
  );
};

export default Layout;
