import { createAction } from 'redux-actions';
import * as WebUtils from '../webUtils/index';

import {
  SELECT_MEAL,
  DELETE_MEAL,
  REMOVE_INGREDIENT,
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL,
} from '../constants/MealsConstants';


export const selectMeal = createAction(SELECT_MEAL);
export const deleteMeal = createAction(DELETE_MEAL);
export const removeIngredient = createAction(REMOVE_INGREDIENT);
export const successCreatingMeal = createAction(SUCCESS_CREATING_MEAL);
export const errorCreatingMeal = createAction(ERROR_CREATING_MEAL);

export function beginCreatingMeal(payload) {
  return {
    payload: payload,
    promise: WebUtils.createMeal(payload),
    types: [BEGIN_CREATING_MEAL, SUCCESS_CREATING_MEAL, ERROR_CREATING_MEAL],
  }
}

