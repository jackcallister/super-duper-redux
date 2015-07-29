import request from 'request';
import config from '../config/config';

function createSession(body) {
  const url = config.get('API_URL') + '/sessions';

  return new Promise((resolve, reject) => {
    request.post(url, { body: body, json: true }, (error, response) => {
      if (!error) {
        resolve(response);
      } else {
        reject(error);
      }
    });
  });
}

export {
  createSession
}