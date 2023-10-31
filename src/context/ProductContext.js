import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../reducer/productReducer";

// Create a context by library
const AppContext = createContext();

const Api = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

//provide that context with objected value to it's all nested children
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "Set_Loading" });
    try {
      const res = await axios.get(url);
      const AllProducts = await res.data;
      dispatch({ type: "My_Api_Data", payload: AllProducts });
    } catch (error) {
      dispatch({ type: "Api_Error" });
      console.error(error, "Api error");
    }
  };
  // to get single products by it's id we need to fetch by API endPoint
  const getSingleProduct = async (url) => {
    dispatch({ type: "Set_Single_Loading" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "Set_Single_Product", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "Set_Single_Error" });
    }
  };

  useEffect(() => {
    getProducts(Api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//here i used global useContext also it's a custom Hook for all over use
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
