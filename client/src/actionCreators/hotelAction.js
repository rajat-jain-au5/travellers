import axios from "axios";


// Get all hotels
export function getAllHotels() {
  return function (dispatch) {
    return axios
      .get("http://localhost:5000/hotel/all", {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: "GET_ALL_HOTELS",
          payload: data,
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };
}



//Search hotel api
export function searchHotel(search) {
  return function (dispatch) {
    return axios
      .post("http://localhost:5000/hotel/search", search, {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: "SEARCH_HOTEL", payload: data });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };
}



//Addcart api
export function addCart(data) {
  return function (dispatch) {
    return axios
      .post("http://localhost:5000/hotel/addcart", data, {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        // console.log(data);
        dispatch({
          type: "ADD_CART",
          payload: data,
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };
}



// Get cart api
export function getCarts() {
  return function (dispatch) {
    return axios
      .get("http://localhost:5000/hotel/allcarts", {
        headers: {
          "x-auth-token": window.localStorage.getItem("token")
        },
      })
      .then(({ data }) => {
        dispatch({
          type: "GET_ALL_CART",
          payload: data,
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };
}


// Delete Cart api
export function deleteFromCart(id) {

  return function (dispatch) {
    return axios
      .delete(`http://localhost:5000/hotel/delete/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch({ 
          type: "DELETE_CART_ITEM", 
          payload: data.data });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };
}


// Add order api
export function addOrder(items){
  return function (dispatch) {
    return axios
      .post("http://localhost:5000/hotel/addorder", items, {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        dispatch({
          type: "ADD_ORDER",
          payload: data,
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };
}




// Get all orders
export function getAllOrder(){
  return function (dispatch) {
    return axios
      .get("http://localhost:5000/hotel/allorders", {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: "GET_ORDER",
          payload: data,
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };
}


export function getActivity(){
   return function (dispatch) {
    return axios
      .get("http://localhost:5000/allusers", {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: "GET_ALL_ACTIVITY",
          payload: data,
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
    }
}