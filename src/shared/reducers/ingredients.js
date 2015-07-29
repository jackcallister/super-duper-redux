const initialState = [
  {
    name: 'Butter',
    id: 1,
  },
  {
    name: 'Chicken',
    id: 2
  }
];

export default function ingredients(state = initialState, action) {
  switch (action.type) {

  default:
    return state;
  }
}
