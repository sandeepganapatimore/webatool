import React, { createContext, useContext, useReducer } from "react";

export const AppContext = createContext({});

const AppContextWrapper = ({ children }) => {
  const reducer = (state, items) => {
    return { ...state, items: items };
  };

  const [state, dispatch] = useReducer(reducer, {});

  const addItem = React.useCallback((item) => {
    localStorage.setItem("sections", JSON.stringify(item));
    dispatch(item);
  }, []);

  const removeItem = React.useCallback(() => {
    localStorage.setItem("sections", JSON.stringify([]));
    dispatch([]);
  }, []);

  const Authenticate = React.useCallback((token) => {
    document.cookie = `token=${token}; SameSite=None; Secure`;
  }, []);

  const getToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
  };

  const logOut = React.useCallback(() => {
    document.cookie = `token=${""}; SameSite=None; Secure`;
  }, []);

  const isAuthenticated = () => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    if (cookieValue) {
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    if (localStorage.getItem("sections")) {
      dispatch(JSON.parse(localStorage.getItem("sections")));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        Authenticate,
        isAuthenticated,
        logOut,
        getToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextWrapper, useAppContext };
