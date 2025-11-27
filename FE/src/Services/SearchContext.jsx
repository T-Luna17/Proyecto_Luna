import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(""); 
  const [filters, setFilters] = useState({
    categoria: "",
    fecha: "",
  });

  return (
    <SearchContext.Provider value={{ search, setSearch, filters, setFilters }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext
