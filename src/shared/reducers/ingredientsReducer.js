const collection = [{
  name: 'Butter',
  id: 1,
},{
  name: 'Chicken',
  id: 2
}]

const initialState = {
  collection: collection
}

export default function ingredients(state = initialState, action) {
  switch (action.type) {

  default:
    return state;
  }
}
