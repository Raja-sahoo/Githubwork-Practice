const filterReducer = (state, action) => {
  switch (action.type) {
    case "Load_Filter_Products":
      if (!action.payload) {
        return state; // Handle the case where action.payload is undefined
      }
      const priceArr = action.payload.map((curElem) => curElem.price);
      // let Max = Math.max(...priceArr);
      /* 2 more ways to get the Max value from Array */
      let Max = Math.max.apply(null, priceArr);
      // let Max = priceArr.reduce(
      //   (initial, currVal) => Math.max(initial, currVal),
      //   0
      // );
      console.log(Max, "Max price for range border");
      return {
        ...state,
        filter_products: action.payload,
        all_products: action.payload,
        filter: {
          ...state.filter,
          maxPrice: Max,
          price: Max,
        },
      };
    case "Set_GridView":
      return {
        ...state,
        grid_view: true,
      };
    case "Set_ListView":
      return {
        ...state,
        grid_view: false,
      };
    case "Get_Sort_Value":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      //   console.log(sort_value, "sort value");
      return {
        ...state,
        sorting_value: [...action.payload],
      };
    case "Sorting_Products":
      // let TempSortData = action.payload;
      const { filter_products, sorting_value } = state;
      let temp = [...filter_products];

      // common function for all condition
      const sortingFunc = (a, b) => {
        if (state.sorting_value === "a-z") return a.name.localeCompare(b.name);
        if (state.sorting_value === "z-a") return b.name.localeCompare(a.name);
        if (state.sorting_value === "lowest") return a.price - b.price;
        if (state.sorting_value === "highest") return b.price - a.price;
      };

      let newSortData = temp.sort(sortingFunc);

      /* if (state.sorting_value === "z-a") {
        newSortData = temp.sort((a, b) => {
          debugger;
          return b.name.localeCompare(a.name);
        });
      } else if (state.sorting_value === "a-z") {
        newSortData = temp.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sorting_value === "lowest") {
        const sortingFunc = (a, b) => {
          return a.price - b.price;
        };
        newSortData = temp.sort(sortingFunc);
      } else if (state.sorting_value === "highest") {
        const sortingFunc = (a, b) => {
          return b.price - a.price;
        };
        newSortData = temp.sort(sortingFunc);
      }
      console.log(newSortData, "a-z data"); */
      return {
        ...state,
        filter_products: newSortData,
      };
    // below for filter search & other function area

    case "Update_Filter_Value":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "Filter_Products":
      let { all_products } = state;
      let tempFilterProducts = all_products;
      const { text, category, company, color, price } = state.filter;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.category === category
        );
      }
      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.category.toLowerCase() === company.toLowerCase()
        );
      }
      if (color) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }
      if (price) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    case "Clear_Filter":
      return {
        ...state,
        filter: {
          ...state.filter,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filter.maxPrice,
          minPrice: state.filter.maxPrice,
          maxPrice: 0,
        },
      };

    default:
      return state;
  }
};
export default filterReducer;
