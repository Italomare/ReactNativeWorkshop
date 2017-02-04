import 'whatwg-fetch';
const API_KEY = 'dc6zaTOxFJmzC';

/**
 * Retrieve 10 gifs from giphy by category
 *
 * @param category
 * @returns Promise
 */
export function getGiphyGifs(category){
  return fetch(`https://api.giphy.com/v1/gifs/search?q=${category.title}&api_key=${API_KEY}&limit=10`)
    .then((response)=> {
      return response.json()
    })
    .catch((err) =>{
      return err;
    });
};
