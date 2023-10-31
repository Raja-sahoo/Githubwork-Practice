import React from "react";

const cartReducer = (state, action) => {
  if (action.type === "Add_To_Cart") {
    let { id, color, amount, product } = action.payload;
    let existingProductInCart = state.cart.find(
      (curElem) => curElem.id == id + color
    );
    if (existingProductInCart) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type == "Remove_Cart_Item") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type == "Clear_Cart") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type == "Cart_Increment") {
    let updatedProduct = state.cart.map((curElem) => {
      console.log(curElem);
      if (curElem.id == action.payload) {
        let IncAmount = curElem.amount + 1;
        if (IncAmount >= curElem.max) {
          IncAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: IncAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type == "Cart_Decrement") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id == action.payload) {
        let decAMount = curElem.amount - 1;
        if (decAMount <= 1) {
          decAMount = 1;
        }
        return {
          ...curElem,
          amount: decAMount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type == "Cart_Total_Item") {
    let updateItemCount = state.cart.reduce((accumulator, curElem) => {
      let { amount } = curElem;
      return (accumulator = amount + accumulator);
    }, 0);
    // console.log(updateItemCount);
    return {
      ...state,
      total_item: updateItemCount,
    };
  }

  if (action.type == "Cart_Total_Price") {
    let TotalPrice = state.cart.reduce((accumulator, curElem) => {
      let { price, amount } = curElem;
      accumulator = accumulator + price * amount;
      return accumulator;
    }, 0);

    return {
      ...state,
      total_price: TotalPrice,
    };
  }
  /* code optimization common formula below  */
  // if (action.type == "Cart_ITEM_Total_Price") {
  //   let { updateItemCount, TotalPrice } = state.cart.reduce(
  //     (accumulator, curElem) => {
  //       let { price, amount } = curElem;
  //       accumulator.updateItemCount += amount;
  //       accumulator.TotalPrice += price * amount;
  //       return accumulator;
  //     }, //accumulator value can be a object and anything we can assign so here obj
  //     {
  //       updateItemCount: 0,
  //       TotalPrice: 0,
  //     }
  //   );
  //   return {
  //     ...state,
  //     total_item: updateItemCount,
  //     total_price: TotalPrice,
  //   };
  // }
};
export default cartReducer;
