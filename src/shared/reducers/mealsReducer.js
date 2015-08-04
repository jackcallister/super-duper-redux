import union from 'lodash/array/union'
import { createReducer } from '../utils/reduxUtils'

import {
  SELECT_MEAL,
  SUCCESS_CREATING_MEAL
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

function successCreatingMeal(state, action) {
  return {
    ...state,
    collection: [...state.collection, action.payload]
  };
}

export default createReducer(initialState, {
  [SELECT_MEAL]: selectMeal,
  [SUCCESS_CREATING_MEAL]: successCreatingMeal
})
