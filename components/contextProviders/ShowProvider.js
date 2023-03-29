import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthProvider";

const ShowContext = createContext();

export default function ShowProvider({ children, data }) {
  const { user } = useAuth();
  const [bookmark, setBookmark] = useState(
    data.map((item) => {
      return { title: item.title, bookmarkStatus: item.isBookmarked };
    })
  );

  function handleBookmark(title) {
    setBookmark((prev) => {
      return prev.map((item) => {
        if (item.title === title)
          return { ...item, bookmarkStatus: !item.bookmarkStatus };
        else {
          return item;
        }
      });
    });
  }

  return (
    <ShowContext.Provider
      value={{ bookmark, onBookmarked: handleBookmark, data: data, user }}
    >
      {children}
    </ShowContext.Provider>
  );
}

export const useShow = () => useContext(ShowContext);
