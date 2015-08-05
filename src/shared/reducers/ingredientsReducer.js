import union from 'lodash/array/union'
import { createReducer } from '../utils/reduxUtils'

import {
  SELECT_MEAL,
  UPDATE_MEAL_PROP,
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL
} from '../constants/MealsConstants'


const initialState = {
  collection: []
}

function successCreatingMeal(state, action) {
  return {
    ...state,
    collection: union(...state.collection, action.payload.ingredients)
  };
}

export default createReducer(initialState, {
  [SUCCESS_CREATING_MEAL]: successCreatingMeal
})