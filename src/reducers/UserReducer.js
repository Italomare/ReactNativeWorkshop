import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_LIKES_REQUESTED,
  GET_LIKES_SUCCESS,
  GET_LIKES_FAILURE
} from '../actions/actions'

export default function UserReducer(state = {username: '', gifs: {}, isLoading: false}, action) {

  switch(action.type) {
    case LOGIN_REQUESTED:
    case GET_LIKES_REQUESTED:
      return {...state, isLoading: true};
    case LOGIN_SUCCESS:
      return {...state, username: action.payload.username, isLoading: false};
    case GET_LIKES_SUCCESS:
      return {...state, gifs: action.payload.gifs, isLoading: false};
    case GET_LIKES_FAILURE:
    case LOGIN_FAILURE:
      return {...state, error: action.payload.error, isLoading: false};
    default:
      return state;
  }

}
