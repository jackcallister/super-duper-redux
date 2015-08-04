import { createReducer } from '../utils/reduxUtils'

import {
  BEGIN_CREATING_MEAL,
  ERROR_CREATING_MEAL,
  UPDATE_MEAL_PROP
} from '../constants/MealsConstants'

const initialState = {
  resource: {
    id: null,
    name: null,
    ingredients: null
  }
}

function beginCreatingMeal(state, action) {
  return initialState;
}

function errorCreatingMeal(state, action) {
  return state;
}

function updateMealProp(state, action) {
  const resource = {
    ...state.resource,
    [action.payload.prop]: action.payload.value
  }

  return {
    ...state,
    resource
  }
}

export default createReducer(initialState, {
  [UPDATE_MEAL_PROP]: updateMealProp,
  [BEGIN_CREATING_MEAL]: beginCreatingMeal,
  [ERROR_CREATING_MEAL]: errorCreatingMeal
})
