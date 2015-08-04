import { createAction } from 'redux-actions';
import * as WebUtils from '../webUtils/index';

import {
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL,
  UPDATE_MEAL_PROP
} from '../constants/MealsConstants';

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
