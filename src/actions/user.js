const {TOGGLE_USER_TYPE, ADD_BOOKING} = require('./types');

//change theme
export const toggleUserType = () => async (dispatch) => {
  console.log('changing user type');
  dispatch({
    type: TOGGLE_USER_TYPE,
  });
};

//add booking
export const addBooking = (data) => async (dispatch) => {
  console.log('adding user booking :', data);
  dispatch({
    type: ADD_BOOKING,
    payload: data,
  });
};
