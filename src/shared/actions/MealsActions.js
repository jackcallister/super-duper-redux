import { createAction } from 'redux-actions';
import * as WebUtils from '../webUtils/index';

import {
  SELECT_MEAL,
  UPDATE_MEAL_PROP,
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL,
  BEGIN_LOADING_MEALS,
  SUCCESS_LOADING_MEALS,
  ERROR_LOADING_MEALS
} from '../constants/MealsConstants';

export const selectMeal = createAction(SELECT_MEAL);
export const updateMealProp = createAction(UPDATE_MEAL_PROP);
export const successCreatingMeal = createAction(SUCCESS_CREATING_MEAL);
export const errorCreatingMeal = createAction(ERROR_CREATING_MEAL);

export function beginCreatingMeal(payload) {
  return {
    payload: payload,
    promise: WebUtils.createMeal(payload),
    types: [BEGIN_CREATING_MEAL, SUCCESS_CREATING_MEAL, ERROR_CREATING_MEAL],
  }
}

export const successLoadingMeals = createAction(SUCCESS_LOADING_MEALS);
export const errorLoadingMeals = createAction(ERROR_LOADING_MEALS);

export function beginLoadingMeals() {
  return {
    promise: WebUtils.getMeals(),
    types: [BEGIN_LOADING_MEALS, SUCCESS_LOADING_MEALS, ERROR_LOADING_MEALS],
  }
}
