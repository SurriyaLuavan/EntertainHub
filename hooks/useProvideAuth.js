import firebase from "@/lib/firebase";
import { useState, useEffect } from "react";

function useProvideAuth() {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return firebase.auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    userID: currentUser,
    signup,
  };
}

//   const signin = (email, password) => {
//     return firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((response) => {
//         setUser(response.user);
//         return response.user;
//       });
//   };

//   const signup = (email, password) => {
//     return firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((response) => {
//         setUser(response.user);
//         return response.user;
//       });
//   };

//   const signout = () => {
//     return firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         setUser(false);
//       });
//   };

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return {
//     userId: user && user.uid,
//     signin,
//     signup,
//     signout,
//     sendPasswordResetEmail,
//     confirmPasswordReset,
//   };
// }

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};

export default useProvideAuth;
