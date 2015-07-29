import request from 'superagent';

export function createSession(data) {
  const url = '/sessions';

  return new Promise((resolve, reject) => {
    request.post(url).send(data).type('json').end((error, response) => {
      if (!error) {
        resolve(response);
      } else {
        reject(error);
      }
    });
  });
}
