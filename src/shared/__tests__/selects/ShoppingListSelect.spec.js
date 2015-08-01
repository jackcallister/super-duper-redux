import assert from 'assert';
import * as ShoppingListSelect from '../../selects/ShoppingListSelect';

describe('ShoppingListSelect', () => {

  describe('selectShoppingList', () => {

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

    const state = ShoppingListSelect.selectShoppingList(store)

    it('returns selected meals and ingredients', () => {
      assert.deepEqual(expectedState, state)
    })
  })
})
