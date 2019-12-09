import axios from '../../libraries/axios';
import queryString from 'querystring';

export const getExplorations = (params) => dispatch => {
  const qs = queryString.stringify(params)
  axios.get(`/explorations?${qs}`).then(response => {
      console.log(response)
      dispatch({
          type: 'GET_EXPLORATIONS',
          payload: response.data
      });
  }).catch(console.error);
};