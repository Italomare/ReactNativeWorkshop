import {
  SET_CATEGORY,
  GET_GIFS_REQUESTED,
  GET_GIFS_SUCCESS,
  GET_GIFS_FAILURE,
  DISLIKE,
  LIKE_REQUESTED,
  LIKE_SUCCESS,
  LIKE_FAILURE
} from '../actions/actions';

export default function GifsReducer(state = {category: null, items: {}, isLoading: false, error: null}, action) {

  switch(action.type) {

    case SET_CATEGORY:
      // return

    case LIKE_REQUESTED:
    case GET_GIFS_REQUESTED:
      // return

    case GET_GIFS_SUCCESS:
      // return

    case DISLIKE:
    case LIKE_SUCCESS:
      let filteredItems = state.items;
      delete filteredItems[action.payload.gif.id];

      // return

    case GET_GIFS_FAILURE:
    case LIKE_FAILURE:
      // return

    default:
      return state;
  }
}

function convertGiphyResponse(gifs){

  let normalizedObj = {};

  gifs.forEach((gif) => {
    let formattedUri = gif.images.fixed_width.url.replace('http', 'https')
    normalizedObj[gif.id] = {id: gif.id, uri: formattedUri};
  });

  return normalizedObj;

}
