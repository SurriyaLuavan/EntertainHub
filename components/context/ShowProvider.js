import { createContext, useContext, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { getFirestore, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthProvider";
import { updateUser } from "@/lib/db";

const ShowContext = createContext();

export default function ShowProvider({ children, data }) {
  const { userId } = useAuth();
  const [docData, loading, error] = useDocument(
    doc(db, "users", userId ? userId : "No user")
  );

  const bookmarkData =
    docData && docData.exists() ? docData.data().bookmark : [];

  console.log(bookmarkData);

  function handleBookmark(title) {
    if (userId && docData && docData.exists()) {
      const exist =
        bookmarkData.length === 0
          ? bookmarkData.filter((item) => item.title === title)
          : [];

      console.log(exist);
      if (exist.length === 0) {
        const [showItem] = data
          .filter((item) => item.title === title)
          .map((item) => {
            return { title: item.title, bookmarkStatus: true };
          });
        console.log(showItem);
        const showData = {
          // bookmark: [...bookmarkData, showItem],
          bookmark: arrayUnion(showItem),
        };
        console.log(showData);
        updateUser(userId, showData);
      } else {
        const [showItemOld] = exist;
        const [showItem] = exist.map((item) => {
          return {
            ...item,
            bookmarkStatus: !item.bookmarkStatus,
          };
        });
        updateUser(userId, {
          bookmark: arrayRemove(showItemOld),
        });
        const showData = {
          // bookmark: [...bookmarkData, showItem],
          bookmark: arrayUnion(showItem),
        };
        console.log(showData);
        updateUser(userId, showData);
      }
    }
  }

  // function handleBookmark(title) {
  //   setBookmark((prev) => {
  //     return prev.map((item) => {
  //       if (item.title === title)
  //         return { ...item, bookmarkStatus: !item.bookmarkStatus };
  //       else {
  //         return item;
  //       }
  //     });
  //   });
  // }

  return (
    <ShowContext.Provider
      value={{
        bookmark: bookmarkData,
        onBookmarked: handleBookmark,
        data: data,
        docData: bookmarkData,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
}

export const useShow = () => useContext(ShowContext);
