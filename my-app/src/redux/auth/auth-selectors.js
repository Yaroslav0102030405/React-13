const getIsAuthenticated = state => Boolean(state.auth.token);

export default {
  getIsAuthenticated,
};
