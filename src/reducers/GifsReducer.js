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
 * TODO Step 4:
 *
 * 1. Create LIKE_REQUESTED and GET_GIFS_REQUESTED cases
 * 2. Create GET_GIFS_SUCCESS case
 */

export default function GifsReducer(state = {category: null, items: {}, isLoading: false, error: null}, action) {
  switch(action.type) {

      case SET_CATEGORY:
        return {...state, category: action.payload.category};

      /**
       * 1. Add requested cases here
       */

      /**
       * 2. Add gif success case here
       */

      case DISLIKE:
      case LIKE_SUCCESS:
        let filteredItems = state.items;
        delete filteredItems[action.payload.gif.id];

        return {
          ...state,
          isLoading: false,
          items: Object.assign({}, filteredItems)
        };

      case GET_GIFS_FAILURE:
      case LIKE_FAILURE:
        return {...state, isLoading: false, error: action.payload.error};

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
