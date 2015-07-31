export default function promiseMiddleware({ dispatch }) {

  return (next) => {
    return (action) => {

      const { promise, types, ...rest } = action;

      if (!promise) {
        return next(action);
      }

      const [BEGIN, SUCCESS, FAILURE] = types;

      next({ ...rest, type: BEGIN });

      return promise.then(
        (response) => next({ ...rest, payload: response, type: SUCCESS }),
        (error) => next({ ...rest, payload: error, type: FAILURE })
      );
    }
  }
}
