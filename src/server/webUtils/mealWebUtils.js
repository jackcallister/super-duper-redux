import request from 'request';
import config from '../config/config';

function createMeal(body, token) {
  const url = config.get('API_URL') + '/meals';

  const headers = {
    'Authorization': token
  }

  return new Promise((resolve, reject) => {
    request.post(url, { body: body, json: true, headers: headers }, (error, response) => {
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
