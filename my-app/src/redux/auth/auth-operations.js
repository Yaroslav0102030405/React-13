import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token} `;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// регистрация пользователя
const register = credentials => async dispatch => {
  // добавили экшин
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

// логинить пользователя
const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const responce = await axios.post('/users/login', credentials);

    dispatch(authActions.loginSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

// лагаутить
const logOut = dispatch => {};

// получать текучего пользователя
const getCurrentUser = () => (dispatch, getState) => {};

export default {
  register,
  login,
  logOut,
  getCurrentUser,
};
