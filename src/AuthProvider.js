import { createContext, useState } from "react";

const AuthContext = createContext({});

let initial = {
  data: null,
  transactions: null,
  showSidebar: true,
  expenses: null,
  wallets: null,
  accounts: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initial);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
