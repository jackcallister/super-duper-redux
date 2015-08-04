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
    console.log(this.props.name)
    return (
      <form>
        <input type='text'
               value={this.props.name}
               onChange={this.updateProp('name')} />

        <input type='text'
               value={this.props.ingredients}
               onChange={this.updateProp('ingredients')} />

        <button onClick={(e) => this.save(e)}>Save</button>
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
