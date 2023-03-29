import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import firebaseApp from "@/lib/firebase";
// import useProvideAuth from "@/hooks/useProvideAuth";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  //   const [currentUser, setCurrentUser] = useState(null);

  const [user, loading, error] = useAuthState(auth);

  //   useEffect(() => {
  //     if (user) {
  //       setCurrentUser(user.email);
  //     } else {
  //       setCurrentUser(null);
  //     }
  //   }, [user]);

  //   if (user) console.log(user.email);

  return (
    <AuthContext.Provider value={{ user: user ? user.email : null }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
