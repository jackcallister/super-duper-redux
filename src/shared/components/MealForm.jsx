import React from 'react'
import { bindActionCreators } from 'redux'
import { Connector } from 'react-redux'
import * as MealActions from '../actions/MealActions'
import { selectMeal } from '../selectors/MealSelector'

class MealForm {

  save(e) {
    e.preventDefault()

    this.props.beginCreatingMeal({
      meal: {
        name: this.props.name
      },
      ingredients: this.props.ingredients
    })
  }

  updateProp(prop) {
    return (e) => {
      this.props.updateMealProp({ prop: prop, value: e.target.value })
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.save(e)}>
        <fieldset>
          <label>Meal name</label>
          <input type='text'
                 value={this.props.name}
                 onChange={this.updateProp('name')} />
        </fieldset>

        <fieldset>
          <label>Ingredients (seperated by comma)</label>
          <input type='text'
                 value={this.props.ingredients}
                 onChange={this.updateProp('ingredients')} />
        </fieldset>

        <input type='submit' value='Save' />
      </form>
    );
  }
}

export default class MealFormConnector {

  render() {
    return (
      <Connector select={selectMeal}>
        {({ meal, dispatch }) =>
          <MealForm {...meal} {...bindActionCreators(MealActions, dispatch)} />
        }
      </Connector>
    )
  }
}
