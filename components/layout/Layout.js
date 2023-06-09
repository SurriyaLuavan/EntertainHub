import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import styles from "/styles/Layout.module.css";
import AlertProvider from "../../context/AlertProvider";
import AlertCard from "../AlertCard";
import ShowProvider from "../../context/BookmarkProvider";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";
import Footer from "./Footer";

const Layout = ({ children, category }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState();
  const { userId } = useAuth();

  useEffect(() => {
    const options = {
      url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}${
        category === "both" ? "" : "/" + category
      }/search`,
      params: {
        searchValue: searchValue,
        userId: category === "bookmarks" && userId,
      },
    };

    const fetchSearchShows = async () => {
      console.log(options.url);
      const res = await axios.request(options);
      const data = res.data;
      setSearchResults(data.searchResults);
    };

    if (searchValue !== "") {
      fetchSearchShows();
    }
  }, [searchValue, category, userId]);

  return (
    <AlertProvider>
      <ShowProvider>
        <main className={styles.layoutContainer}>
          <AlertCard />
          <NavBar category={category} />
          <SearchBar
            searchValue={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onBack={() => setSearchValue("")}
            category={category}
          />
          {searchValue === "" ? (
            children
          ) : (
            <SearchResults
              searchValue={searchValue}
              searchResults={searchResults}
            />
          )}
        </main>
        <Footer />
      </ShowProvider>
    </AlertProvider>
  );
};

export default Layout;
