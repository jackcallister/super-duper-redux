import union from 'lodash/array/union'
import { createReducer } from '../utils/reduxUtils'

import {
  SELECT_MEAL,
  UPDATE_MEAL_PROP,
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL,
  BEGIN_LOADING_MEALS,
  SUCCESS_LOADING_MEALS,
  ERROR_LOADING_MEALS
} from '../constants/MealsConstants'

const initialState = {
  collection: [],

  resource: {
    id: null,
    name: null,
    ingredients: null
  },

  selectedMealIds: []
}

function selectMeal(state, action) {
  const selectedMealIds = union(state.selectedMealIds, [action.payload])

  return {
    ...state,
    selectedMealIds
  }
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

function beginCreatingMeal(state, action) {
  return state;
}

function successCreatingMeal(state, action) {
  return {
    ...state,
    collection: [...state.collection, action.payload.meal]
  };
}

function errorCreatingMeal(state, action) {
  return state;
}

function beginLoadingMeals(state, action) {
  return state;
}

function successLoadingMeals(state, action) {
  return {
    ...state,
    collection: action.payload.meals
  };
}

function errorLoadingMeals(state, action) {
  return state;
}

export default createReducer(initialState, {
  [SELECT_MEAL]: selectMeal,
  [UPDATE_MEAL_PROP]: updateMealProp,
  [BEGIN_CREATING_MEAL]: beginCreatingMeal,
  [ERROR_CREATING_MEAL]: errorCreatingMeal,
  [SUCCESS_CREATING_MEAL]: successCreatingMeal,
  [BEGIN_LOADING_MEALS]: beginLoadingMeals,
  [ERROR_LOADING_MEALS]: errorLoadingMeals,
  [SUCCESS_LOADING_MEALS]: successLoadingMeals
})
