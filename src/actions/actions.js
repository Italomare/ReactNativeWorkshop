export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LIKE_REQUESTED = 'LIKE_REQUESTED';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';

export const DISLIKE = 'DISLIKE';

export const GET_LIKES_REQUESTED = 'GET_LIKES_REQUESTED';
export const GET_LIKES_SUCCESS = 'GET_LIKES_SUCCESS';
export const GET_LIKES_FAILURE = 'GET_LIKES_FAILURE';

export const GET_GIFS_REQUESTED = 'GET_GIFS_REQUESTED';
export const GET_GIFS_SUCCESS = 'GET_GIFS_SUCCESS';
export const GET_GIFS_FAILURE = 'GET_GIFS_FAILURE';

export const SET_CATEGORY = 'SET_CATEGORY';

/**
* G I F S *
https://i.giphy.com/xThuWg7lusylvpAVu8.gif
https://i.giphy.com/l2YWeYNrD6P5nCiCA.gif
https://i.giphy.com/xTk9ZZCndSIbxjRO8w.gif
https://media.giphy.com/media/26FLeFK9dfmg6xq12/source.gif
https://media.giphy.com/media/26FLeFK9dfmg6xq12/source.gif
*/


/**
 * Step 4:
 * L O G I N
 * - Create login function
 * - Create loginRequested function
 * - Create loginSuccess function
 * - Create loginFailure function
 * - Dispatch login and loginSuccess within login function


/**
* Login
*
* @param username
*/

/**
* G E T  G I F S  by L I K E
* - Create getLikes function with temporary gifs
* - Dispatch getLikesRequested and getLikesSuccess within getLikes function
*/

/**
* Get Gifs by Likes
*
* @param category
*/

export function getLikesRequested() {
  return {
    type: GET_LIKES_REQUESTED
  };
};

export function getLikesSuccess(gifs) {
  return {
    type: GET_LIKES_SUCCESS,
    payload: { gifs }
  };
};

export function getLikesFailure(error) {
  return{
    type: GET_LIKES_FAILURE,
    payload: { error }
  }
}

/**
* Like a gif
*
* @param gifId
* @param uri
*/


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
export function dislike(gif) {
  return{
    type: DISLIKE,
    payload: { gif }
  }
};

/**
 * G E T  G I F S  by C A T E G O R Y
 * - Create getGifs function with a hard coded data object
 */

/**
 * Get Gifs by Category
 *
 * @param category
 */


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

/**
* Set Gif Category
*/

export function setCategory(category) {
  return{
    type: SET_CATEGORY,
    payload: { category }
  }
}
