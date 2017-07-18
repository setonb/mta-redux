import axios from 'axios';

export const GET_TIMES = 'GET_TIMES';

export function getTimes(stationId = 114, direction = 2) {
  const ROOT_URL = `http://www.setonbrown.com/mta/mta-scraper.php?stationId=${stationId}&direction=${direction}`;
  const request = axios.get(ROOT_URL);

  return {
    type: GET_TIMES,
    payload: request
  }
}

export function getStation(station) {
  getTimes(station.stationId, station.direction);
}
