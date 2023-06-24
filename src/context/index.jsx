import { createContext, useState, useEffect } from "react";

import { getCategories, getProducts } from "../api/APIServices";

export const SearcherContext = createContext();

// eslint-disable-next-line react/prop-types
export const SearcherProvider = ({ children }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searcher, setSearcher] = useState("");
  //getting data from api
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
   
  useEffect(() => {
    getAllCategories();
    getData();
  }, []);

const getAllCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const getData = async () => {
    const categories = await getProducts();
    setData(categories);
  };

  //filtering product in searccher
  const [filteredData, setFilteredData] = useState();

  const dataFiltered = (data, searcher) => {
    return data?.filter((product) =>
      product.name.toLowerCase().includes(searcher.toLowerCase())
      || product.category.name.toLowerCase().includes(searcher.toLowerCase())
      || product.description.toLowerCase().includes(searcher.toLowerCase())
    );
  };

  useEffect(() => {
    if (searcher) {
      setFilteredData(dataFiltered(data, searcher));
    }
  }, [data, searcher]);
 

  return (
    <SearcherContext.Provider
      value={{
        categories,
        setCategories,
        searcher,
        setSearcher,
        data,
        setData,
        filteredData
      }}
    >
      {children}
    </SearcherContext.Provider>
  );
};
