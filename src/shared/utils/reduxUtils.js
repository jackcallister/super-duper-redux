function createReducer(initialState, handlers) {
  return function (state = initialState, action) {
    return handlers[action.type] ? handlers[action.type](state, action) : state;
  }
}

function createAction(constant) {
  return function (payload) {
    return {
      type: constant,
      payload: payload
    };
  }
}

export {
  createReducer,
  createAction
}