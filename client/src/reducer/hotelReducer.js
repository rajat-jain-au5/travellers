let intialState = {
  allhotels: [],
  searchResult: [],
  addCart: [],
  redirect: false,
  cartAdd: false,
  orderList: [],
  orderplaced: false,
  activities:[]
};

export default function (state = intialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_ALL_HOTELS":
      stateCopy.allhotels = [...action.payload];
      // console.log(stateCopy)
      return stateCopy;
    case "SEARCH_HOTEL":
      stateCopy.searchResult = [...action.payload];
      stateCopy.redirect = true;
      return stateCopy;
    case "ADD_CART":
      stateCopy.cartAdd = true;
      stateCopy.redirect=false
      return stateCopy;
    case "GET_ALL_CART":
      stateCopy.addCart = action.payload;
      stateCopy.cartAdd = false;

      return stateCopy;
    case "DELETE_CART_ITEM":
      stateCopy.addCart = stateCopy.addCart.filter(
        (el) => el._id !== action.payload
      );
      return stateCopy;
    case "ADD_ORDER":
      stateCopy.orderList = action.payload;
      stateCopy.orderplaced = true;
      return stateCopy;
      case "GET_ORDER":
        stateCopy.orderList = action.payload
        return stateCopy
       case "GET_ALL_ACTIVITY":
         stateCopy.activities = action.payload
         return stateCopy
    default:
      return stateCopy;
  }
}
