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

/**
 * Step:4
 * Add action handlers inside switch statement
 */

export default function GifsReducer(state = {category: null, items: {}, isLoading: false, error: null}, action) {

}

function convertGiphyResponse(gifs){

  let normalizedObj = {};

  gifs.forEach((gif) => {
    let formattedUri = gif.images.fixed_width.url.replace('http', 'https')
    normalizedObj[gif.id] = {id: gif.id, uri: formattedUri};
  });

  return normalizedObj;

}
