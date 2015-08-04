import request from 'superagent';

export function createSession(payload) {
  const url = '/sessions';

  return new Promise((resolve, reject) => {
    request.post(url).send(payload).type('json').end((error, response) => {
      if (!error) {
        resolve(response);
      } else {
        reject(error);
      }
    });
  });
}

export function createMeal(payload) {

  return new Promise((resolve, reject) => {
    const url = '/api/meals';

    request.post(url).send(payload).type('json').end((error, response) => {
      if (!error) {
        resolve(response.body.body)
      } else {
        reject(error);
      }
    });
  });
}
