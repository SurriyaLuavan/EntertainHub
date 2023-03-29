import { Children, createContext, useContext, useState } from "react";
import firebaseApp from "@/lib/firebase";
// import useProvideAuth from "@/hooks/useProvideAuth";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const [user, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ user: user ? user.email : null }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
