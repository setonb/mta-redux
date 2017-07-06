import axios from 'axios';

export const GET_TIMES = 'GET_TIMES';

export function getTimes() {
  const ROOT_URL = `http://www.setonbrown.com/mta/mta-scraper.php`;
  const request = axios.get(ROOT_URL);

  return {
    type: GET_TIMES,
    payload: request
  }
}
