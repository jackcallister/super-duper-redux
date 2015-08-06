import union from 'lodash/array/union'
import uniq from 'lodash/array/uniq'
import { createReducer } from '../utils/reduxUtils'

import {
  SUCCESS_CREATING_MEAL,
  SUCCESS_LOADING_MEALS
} from '../constants/MealsConstants'


const initialState = {
  collection: []
}

function successCreatingMeal(state, action) {
  const ingredients = uniq(union(state.collection, action.payload.ingredients), (i) => {
    return i.id;
  })

  return {
    ...state,
    collection: ingredients
  };
}

function successLoadingMeals(state, action) {
  return {
    ...state,
    collection: action.payload.ingredients
  };
}

export default createReducer(initialState, {
  [SUCCESS_CREATING_MEAL]: successCreatingMeal,
  [SUCCESS_LOADING_MEALS]: successLoadingMeals
});
