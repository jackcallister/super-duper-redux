import assert from 'assert';
import * as ShoppingListSelect from '../../selects/ShoppingListSelect';

describe('ShoppingListSelect', () => {

  describe('selectShoppingList', () => {

    const selectedMeal = {
      id: 1,
      ingredientIds: [1]
    }

    const otherMeal = {
      id: 2
    }

    const selectedIngredient = {
      id: 1
    }

    const otherIngredient = {
      id: 2
    }

    const store = {
      meals: [selectedMeal, otherMeal],
      ingredients: [selectedIngredient, otherIngredient],
      selectedMeals: [selectedMeal]
    }

    const expectedState = {
      meals: [selectedMeal],
      ingredients: [selectedIngredient]
    }

    const state = ShoppingListSelect.selectShoppingList(store)

    it('returns meals', () => {
      assert.deepEqual(state, expectedState)
    })
  })
})
