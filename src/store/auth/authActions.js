import axios from '../../libraries/axios';
import LocalStorage from 'asynkstorage';

export const login = (email, password) => dispatch => {
    axios.post('/auth/login', {email, password})
    .then(response => {
      const userdata = response.data;
      saveSession(userdata).then(() => {
        dispatch({
          type: 'LOGIN',
          payload: userdata
        })
      });
    }).catch(console.log);
};

export function saveSession(userdata) {
  return LocalStorage.setItem('auth', userdata);
}

export function getSession() {
  return LocalStorage.getItem('auth');
}

export const restoreSession = () => dispatch => {
  getSession().then(userdata => {
    dispatch({
      type: 'RESTORED_SESSION',
      payload: userdata
    });
  }).catch(console.error);
};
