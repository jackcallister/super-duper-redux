import assert from 'assert';
import meals from '../../reducers/meals';

import {
  DELETE_MEAL,
  REMOVE_INGREDIENT
} from '../../constants/MealsConstants';

describe('meals reducer', () => {

  const initialState = [{
    name: 'Butter chicken',
    id: 1
  }];

  describe('initial state', () => {
    let action = {};

    let state = meals(initialState, action);

    it('has one items', () => {
      assert.equal(state.length, 1);
    });
  });

  describe('deleteMeal', () => {
    let action = {
      payload: initialState[0],
      type: DELETE_MEAL
    };

    let state = meals(initialState, action);

    it('removes the meal', () => {
      assert.equal(state.length, 0);
    });
  });
});
