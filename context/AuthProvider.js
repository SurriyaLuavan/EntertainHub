import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  return (
    <AuthContext.Provider
      value={{
        userId,
        loading,
        setUserIdState: (id) => setUserId(id),
        setLoadingState: (state) => setLoading(state),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
