import axios from 'axios';

export const loadText = () => {
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_TEXT_START'});
    axios
      .get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      .then(function(response) {
        console.log(response);
        dispatch({type: 'LOAD_TEXT_SUCCESS', payload: response.data[0].author});
      })
      .catch(function(error) {
        dispatch({type: 'LOAD_TEXT_FAILURE', payload: error});
      });
  };
};
