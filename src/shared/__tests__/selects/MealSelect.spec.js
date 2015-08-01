import assert from 'assert';
import * as MealSelect from '../../selects/MealSelect';

describe('MealSelect', () => {

  describe('selectMeals', () => {
    const store = {
      meals: {
        collection: ['Meal'],
      },
      ingredients: {
        collection: ['Ingredients']
      }
    }

    const expectedState = {
      meals: ['Meal']
    }

    const state = MealSelect.selectMeals(store)

    it('returns meals', () => {
      assert.deepEqual(state, expectedState)
    })
  })

  describe('selectIngredientsFromMeal', () => {

    const meal = {
      id: 1,
      ingredientIds: [1]
    }

    const ingredient = {
      id: 1
    }

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
