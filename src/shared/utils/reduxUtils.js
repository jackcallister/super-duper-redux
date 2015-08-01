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

function createAsyncAction(suffix, promise) {
  return function (payload) {
    return {
      types: ['BEGIN_' + suffix, 'SUCCESS_' + suffix, 'ERROR_' + suffix],
      payload: payload,
      promise: promise
    }
  }
}

export {
  createReducer,
  createAction,
  createAsyncAction
}