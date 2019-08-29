import * as Config from './config';

import axios from 'axios';
export default async function apiData(endpoint, method, body) {
  try {
    return axios({
      method: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body
    });
  }
  catch (error) {
    console.log(error);
  }
}
