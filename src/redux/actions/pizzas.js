import axios from "axios";
export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
    payload,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
 
});
