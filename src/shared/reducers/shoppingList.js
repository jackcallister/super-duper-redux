import {
  SELECT_MEAL
} from '../constants/MealsConstants';

const initialState = [];

export default function shoppingList(state = initialState, action) {
  switch (action.type) {

  case SELECT_MEAL:
    return [action.payload, ...state];

  default:
    return state;
  }
}
