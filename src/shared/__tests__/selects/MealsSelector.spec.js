import assert from 'assert';
import * as MealsSelector from '../../selectors/MealsSelector';

describe('MealsSelector', () => {

  describe('selectMeals', () => {

    const store = {
      meals: {
        collection: [{
          id: 1,
          ingredientIds: [1]
        }],
      },
      ingredients: {
        collection: [{
          id: 1
        }]
      }
    }

    const expectedState = {
      meals: [{
        id: 1,
        ingredientIds: [1]
      }]
    }

    const state = MealsSelector.selectMeals(store)

    it('returns meals', () => {
      assert.deepEqual(expectedState, state)
    })
  })

  describe('selectSelectedMeals', () => {

    const store = {
      meals: {
        collection: [{
          id: 1,
          ingredientIds: [1]
        }, {
          id: 2,
          ingredientIds: []
        }],
        selectedMealIds: [1]
      },
      ingredients: {
        collection: [{
          id: 1
        }]
      }
    }

    const expectedState = {
      meals: [{
        id: 1,
        ingredientIds: [1]
      }],
      ingredients: [{
        id: 1,
        count: 1
      }]
    }

    const state = MealsSelector.selectSelectedMeals(store)

    it('returns selected meals and ingredients with count', () => {
      assert.deepEqual(expectedState, state)
    })
  })
})
