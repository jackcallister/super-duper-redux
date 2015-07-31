import assert from 'assert';
import meals from '../meals';



describe('meals reducer', function() {
  let state;
  let action = {};

  describe('initial state', function() {
    const initialState = [{
      name: 'Butter chicken',
      id: 1,
      ingredientIds: [1, 2]
    }];

    state = meals(initialState, action);

    it('has two items', function() {
      assert.equal(state.length, 1);
    });
  });
});
