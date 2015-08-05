import { createAction } from 'redux-actions';
import * as WebUtils from '../webUtils/index';

import {
  SELECT_MEAL
} from '../constants/MealsConstants';

export const selectMeal = createAction(SELECT_MEAL);
