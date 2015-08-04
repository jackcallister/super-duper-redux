import assert from 'assert'
import meals from '../../reducers/mealsReducer'

import {
  SELECT_MEAL
} from '../../constants/MealsConstants'

describe('meals reducer', () => {

  const initialState = {
    collection: [{
      name: 'Butter chicken',
      id: 1
    }],

    selectedMealIds: []
  }

  describe('selectMeal', () => {

    let expectedState = {
      collection: [{
        name: 'Butter chicken',
        id: 1
      }],

      selectedMealIds: [1]
    }

    let action = {
      payload: 1,
      type: SELECT_MEAL
    }

    let state = meals(initialState, action)

    it('removes the meal', () => {
      assert.deepEqual(state, expectedState)
    })
  })
})
