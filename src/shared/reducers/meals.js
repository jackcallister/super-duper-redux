import without from 'lodash/array/without';

import {
  DELETE_MEAL,
  REMOVE_INGREDIENT
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

export default function meals(state = initialState, action) {
  switch (action.type) {

  case DELETE_MEAL:
    return state.filter( meal =>
      meal.id !== action.payload
    );

  case REMOVE_INGREDIENT:
    const ingredientId = action.payload.ingredientId;

    return state.map(meal => {
      if (meal.id === action.payload.id) {
        return { ...meal, ingredientIds: without(meal.ingredientIds, ingredientId) };
      } else {
        return meal;
      }
    });

  default:
    return state;
  }
}
