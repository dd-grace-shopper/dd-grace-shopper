const GET_DESTINATIOIN_INPUT = 'GET_DESTINATIONINPUT';
const RECEIVE_DISTANCE_FROM_GOOGLE = 'GET_DISTANCE_FROM_GOOGLE';

export function getDestinationInput(destinationInput){
  const action = {
    type: GET_DESTINATIOIN_INPUT,
    destinationInput
  };
  return action;
}

export function receiveDistanceFromGoogle(receivedDistance){
  const action = {
    type: RECEIVE_DISTANCE_FROM_GOOGLE,
    receivedDistance
  };
  return action;
}


// reducer
export default function distance(state = {}, action) {
  switch (action.type) {
    case GET_DESTINATIOIN_INPUT:
      return Object.assign({}, state, {destinationInput: action.destinationInput});
    case RECEIVE_DISTANCE_FROM_GOOGLE:
      return Object.assign({}, state, {receivedDistance: action.receivedDistance});
    default:
      return state;
  }
}
