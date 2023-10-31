import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import filterReducer from "../reducer/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "highest",
  filter: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  // console.log(products, "filterContext.js");
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "Set_GridView" });
  };
  const setListView = () => {
    return dispatch({ type: "Set_ListView" });
  };

  const sorting = (event) => {
    let userEvent = event.target.value; //this another way of approach else u can see the long way at reducer function
    dispatch({ type: "Get_Sort_Value", payload: userEvent });
  };

  const updateFilterValue = (event) => {
    const { name, value } = event.target;
    return dispatch({ type: "Update_Filter_Value", payload: { name, value } });
  };

  // to clear the filter
  const clearFilter = () => {
    return dispatch({ type: "Clear_Filter" });
  };

  useEffect(() => {
    // dispatch({ type: "Sorting_Products", payload: products });  //previous version to less payload omitted
    dispatch({ type: "Sorting_Products" });
    dispatch({ type: "Filter_Products" });
  }, [products, state.sorting_value, state.filter]);
  useEffect(() => {
    dispatch({ type: "Load_Filter_Products", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
