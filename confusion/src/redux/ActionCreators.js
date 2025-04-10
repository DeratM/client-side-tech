import { DISHES } from '../shared/dishes';  // Assuming you are still using static data for dishes
import * as ActionTypes from './ActionTypes';

// Action creator to fetch dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));  // Dispatch loading action before making the request

    // Simulate fetching data with setTimeout (in a real scenario, you would fetch from an API)
    setTimeout(() => {
        dispatch(addDishes(DISHES));  // After 2 seconds, dispatch the action to add dishes
    }, 2000);
};

// Action to indicate loading state
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

// Action to handle error
export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

// Action to add fetched dishes
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
