import React, { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
const cartContext = createContext();

const getLocalData = () => {
  let localData = localStorage.getItem("MyCart");
  // if (localData === []) {
  //   return [];
  // } else {
  //   return JSON.parse(localData);
  // }
  const Data = JSON.parse(localData);
  if (!Array.isArray(Data)) return [];
  return Data;
};
const init = {
  cart: getLocalData(),
  //   cart: [],
  total_item: 0,
  total_price: 0,
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, init);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "Add_To_Cart", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "Remove_Cart_Item", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "Clear_Cart" });
  };

  const setIncrease = (id) => {
    dispatch({ type: "Cart_Increment", payload: id });
  };
  const setDecrease = (id) => {
    dispatch({ type: "Cart_Decrement", payload: id });
  };

  useEffect(() => {
    // dispatch({ type: "Cart_Total_Item" });
    // dispatch({ type: "Cart_Total_Price" });
    dispatch({ type: "Cart_ITEM_Total_Price" }); // it's for code optimization of above 2 dispatch func
    localStorage.setItem("MyCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
