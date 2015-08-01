import assert from 'assert';
import * as MealSelect from '../../selects/MealSelect';

describe('MealSelect', () => {

  const meal = {
    id: 1,
    ingredientIds: [1]
  }

  const ingredient = {
    id: 1
  }

  describe('selectMeals', () => {
    const store = {
      meals: {
        collection: [meal],
      },
      ingredients: {
        collection: [ingredient]
      }
    }

    const expectedState = {
      meals: [meal]
    }

    const state = MealSelect.selectMeals(store)

    it('returns meals', () => {
      assert.deepEqual(state, expectedState)
    })
  })

  describe('selectIngredientsFromMeal', () => {

    const store = {
      meals: {
        collection: [meal]
      },
      ingredients: {
        collection: [ingredient]
      }
    }

    const expectedState = {
      meal: meal,
      ingredients: [ingredient]
    }

    const state = MealSelect.selectIngredientsFromMeal(meal)(store)

    it('returns the meal and it\'s assigned ingredients', () => {
      assert.deepEqual(expectedState, state)
    })
  })
})
