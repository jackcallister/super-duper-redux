import assert from 'assert';
import * as IngredientsSelector from '../../selectors/IngredientsSelector';

describe('IngredientsSelector', () => {

  describe('selectIngredientsFromMeal', () => {

    const meal = {
      id: 1,
      ingredientIds: [1]
    }

    const otherMeal = {
      id: 2,
      ingredientIds: [0]
    }

    const ingredient = {
      id: 1
    }

    const store = {
      meals: {
        collection: [meal, otherMeal]
      },
      ingredients: {
        collection: [ingredient]
      }
    }

    const expectedState = {
      meal: meal,
      ingredients: [ingredient]
    }

    const state = IngredientsSelector.selectIngredientsFromMeal(meal)(store)

    it('returns the meal and it\'s assigned ingredients', () => {
      assert.deepEqual(expectedState, state)
    })
  })
})
