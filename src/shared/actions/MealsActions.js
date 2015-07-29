import {
  SELECT_MEAL,
  DELETE_MEAL,
  REMOVE_INGREDIENT
} from '../constants/MealsConstants';

export function selectMeal(payload) {
  return {
    type: SELECT_MEAL,
    payload: payload
  };
}

export function deleteMeal(payload) {
  return {
    type: DELETE_MEAL,
    payload: payload
  };
}

export function removeIngredient(payload) {
  return {
    type: REMOVE_INGREDIENT,
    payload: payload
  };
}
