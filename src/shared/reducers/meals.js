import without from 'lodash/array/without';
import { createReducer } from '../utils/reduxUtils';

import {
  DELETE_MEAL,
  REMOVE_INGREDIENT,
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL
} from '../constants/MealsConstants';

const initialState = [{
  name: 'Butter chicken',
  id: 1,
  ingredientIds: [1, 2]
},
{
  name: 'Bacon and eggs',
  id: 2,
  ingredientIds: [1]
}];

function deleteMeal(state, action) {
  return state.filter((meal) => {
    meal.id !== action.payload;
  });
}

function removeIngredient(state, action) {
  const ingredientId = action.payload.ingredientId;

  return state.map((meal) => {
    if (meal.id === action.payload.id) {
      return { ...meal, ingredientIds: without(meal.ingredientIds, ingredientId) };
    } else {
      return meal;
    }
  });
}

function beginCreatingMeal(state, action) {
  console.log('BEGIN', action)
  return state;
}

function successCreatingMeal(state, action) {
  console.log('SUCCESS', action)
  return state;
}

function errorCreatingMeal(state, action) {
  console.log('ERROR', action)
  return state;
}

export default createReducer(initialState, {
  [DELETE_MEAL]: deleteMeal,
  [REMOVE_INGREDIENT]: removeIngredient,
  [BEGIN_CREATING_MEAL]: beginCreatingMeal,
  [SUCCESS_CREATING_MEAL]: successCreatingMeal,
  [ERROR_CREATING_MEAL]: errorCreatingMeal
});
