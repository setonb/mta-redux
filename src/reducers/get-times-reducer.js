import { GET_TIMES } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case GET_TIMES:
      return action.payload;
  }

  return state;
}
