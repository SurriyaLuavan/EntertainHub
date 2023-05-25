import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import axios from "axios";

const ShowContext = createContext();

export default function ShowProvider({ children }) {
  const { userEmail } = useAuth();
  const [userBookmarks, setuserBookmarks] = useState([]);
  // Check how to use useReducer
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const options = {
      url: `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}`,
      data: {
        email: userEmail,
      },
    };

    const getUser = async () => {
      const res = await axios.post(options.url, options.data);
      const data = res.data;
      if (data) {
        setuserBookmarks(data.bookmarks);
        setUserId(data._id);
      }
    };

    if (userEmail) {
      getUser();
    }
  }, [userEmail]);

  async function handleBookmark(showId) {
    const options = {
      url: `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${userId}/bookmarks/${showId}`,
    };

    const res = await axios.patch(options.url);
    const data = res.data;

    setuserBookmarks(data.bookmarks);
  }

  return (
    <ShowContext.Provider
      value={{
        bookmark: userBookmarks,
        onBookmarked: handleBookmark,
        setBookmark: (val) => setuserBookmarks(val),
        // userBookmarks,
        // userId,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
}

export const useShow = () => useContext(ShowContext);
