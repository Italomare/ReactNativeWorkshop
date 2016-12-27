
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LIKE_REQUESTED = 'LIKE_REQUESTED';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';

export const DISLIKE = 'DISLIKE';

export const GET_GIFS_REQUESTED = 'GET_GIFS_REQUESTED';
export const GET_GIFS_SUCCESS = 'GET_GIFS_SUCCESS';
export const GET_GIFS_FAILURE = 'GET_GIFS_FAILURE';

/**
 * Login 
 *
 * @param username 
 */
export function login(username) {
  return (dispatch) => {

    dispatch(loginRequested());    
    dispatch(loginSuccess(username));    

  };
};

export function loginRequested() {
  return {
    type: LOGIN_REQUESTED
  };
};

export function loginSuccess(username) {
  return {
    type: LOGIN_SUCCESS,
    payload: { username }
  };
};

export function loginFailure(error) {
  return{
    type: LOGIN_FAILURE,
    payload: { error }
  }
}

/**
 * Like a gif 
 *
 * @param gifId 
 * @param uri 
 */
export function like(gifId, uri) {
  return (dispatch) => {

    dispatch(likeRequested());    
    dispatch(likeSuccess({id: gifId, uri}));    

  };
};

export function likeRequested() {
  return {
    type: LIKE_REQUESTED
  };
};

export function likeSuccess(gif) {
  return {
    type: LIKE_SUCCESS,
    payload: { gif }
  };
};

export function likeFailure(error) {
  return{
    type: LIKE_FAILURE,
    payload: { error }
  }
}

/**
 * Dislike a gif 
 *
 * @param gifId 
 */
export function dislike(gifId) {
  return{
    type: DISLIKE,
    payload: { gifId }
  }
};

/**
 * Get Gifs by Category 
 *
 * @param category 
 */
export function getGifs(category) {
  return (dispatch) => {

    dispatch(getGifsRequested());    
    dispatch(getGifsSuccess({id: gifId, uri}));    

  };
};

export function getGifsRequested() {
  return {
    type: GET_GIFS_REQUESTED
  };
};

export function getGifsSuccess(gifs) {
  return {
    type: GET_GIFS_SUCCESS,
    payload: { gifs }
  };
};

export function getGifsFailure(error) {
  return{
    type: GET_GIFS_FAILURE,
    payload: { error }
  }
}
