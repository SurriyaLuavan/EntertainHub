import { createContext, useContext } from "react";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user] = useAuthState(auth);
  return (
    <AuthContext.Provider
      value={{
        userId: user ? user.uid : "",
        userEmail: user ? user.email : "",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
