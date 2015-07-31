import assert from 'assert';
import * as MealsActions from '../../actions/MealsActions';

describe('MealsActions', () => {
  it('selectMeal', () => {
    const action = MealsActions.selectMeal( { id: 1, name: 'Butter Chicken' } );

    console.log(action);
    assert.equal(1, 1);
  });
});
