const {TOGGLE_USER_TYPE} = require('./types');

//change theme
export const toggleUserType = () => async (dispatch) => {
  console.log('changing user type');
  dispatch({
    type: TOGGLE_USER_TYPE,
  });
};
