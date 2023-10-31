const productReducer = (state, action) => {
  switch (action.type) {
    case "Set_Loading":
      return {
        ...state,
        isLoading: true,
      };
    case "My_Api_Data":
      const featureData = action.payload.filter(
        (currElm) => currElm.featured === true
      );
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "Api_Error":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "Set_Single_Loading":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "Set_Single_Product":
      return {
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "Set_Single_Error":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default productReducer;
