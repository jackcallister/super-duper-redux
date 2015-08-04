import request from 'request';
import config from '../config/config';

function createMeal(body) {
  const url = config.get('API_URL') + '/meals';

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
  createMeal
}
