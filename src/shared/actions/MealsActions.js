import { createAction } from 'redux-actions';
import * as WebUtils from '../webUtils/index';

import {
  SELECT_MEAL,
  DELETE_MEAL,
  REMOVE_INGREDIENT
} from '../constants/MealsConstants';

export const selectMeal = createAction(SELECT_MEAL);
export const deleteMeal = createAction(DELETE_MEAL);
export const removeIngredient = createAction(REMOVE_INGREDIENT);
