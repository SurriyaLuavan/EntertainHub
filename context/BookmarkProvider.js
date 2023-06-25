import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import axios from "axios";

const BookmarkContext = createContext();

export default function BookmarkProvider({ children }) {
  const { setLoadingState, userId } = useAuth();
  const [userBookmarks, setuserBookmarks] = useState([]);

  useEffect(() => {
    const getBookmarks = async () => {
      const options = {
        url: `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${userId}/bookmarks`,
      };
      const res = await axios.get(options.url);

      setuserBookmarks(res.data);
      setLoadingState(false);
    };

    if (userId) {
      getBookmarks();
    }
  }, [userId]);

  async function handleBookmark(showId) {
    const options = {
      url: `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${userId}/bookmarks/${showId}`,
    };

    const res = await axios.patch(options.url);
    const data = res.data;

    setuserBookmarks(data.bookmarks);
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmark: userBookmarks,
        onBookmarked: handleBookmark,
        setBookmark: (val) => setuserBookmarks(val),
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmark = () => useContext(BookmarkContext);
