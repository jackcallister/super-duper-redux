import union from 'lodash/array/union'
import { createReducer } from '../utils/reduxUtils'

import {
  SELECT_MEAL,
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL
} from '../constants/MealsConstants'

const collection = [{
  name: 'Butter chicken',
  id: 1,
  ingredientIds: [1, 2]
},{
  name: 'Bacon and eggs',
  id: 2,
  ingredientIds: [1]
}]

const initialState = {
  collection: collection,
  selectedMealIds: []
}

function selectMeal(state, action) {
  const selectedMealIds = union(state.selectedMealIds, [action.payload])

  return {
    ...state,
    selectedMealIds
  }
}

function beginCreatingMeal(state, action) {
  return state;
}

function successCreatingMeal(state, action) {
  return state;
}

function errorCreatingMeal(state, action) {
  return state;
}

export default createReducer(initialState, {
  [SELECT_MEAL]: selectMeal,
  [BEGIN_CREATING_MEAL]: beginCreatingMeal,
  [SUCCESS_CREATING_MEAL]: successCreatingMeal,
  [ERROR_CREATING_MEAL]: errorCreatingMeal
})
