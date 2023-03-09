import React, { createContext, useContext, useReducer } from "react";

export const AppContext = createContext({});

const AppContextWrapper = ({ children }) => {
  const reducer = (state, items) => {
    return { ...state, items: items };
  };

  const [state, dispatch] = useReducer(reducer, {});

  const addItem = React.useCallback((item) => {
    let sections = [];
    if (localStorage.getItem("sections")) {
      sections = JSON.parse(localStorage.getItem("sections"));
    }
    sections.push(item);
    localStorage.setItem("sections", JSON.stringify(sections));
    dispatch(item);
  }, []);

  const removeItem = React.useCallback(() => {
    localStorage.setItem("sections", JSON.stringify([]));
    dispatch([]);
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem("sections")) {
      dispatch(JSON.parse(localStorage.getItem("sections")));
    }
  }, []);

  return (
    <AppContext.Provider value={{ ...state, addItem, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextWrapper, useAppContext };
