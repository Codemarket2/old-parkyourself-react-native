const {TOGGLE_USER_TYPE} = require('../actions/types');

const initialState = {
  isSpaceOwner: false,
};

export default function (state = initialState, action) {
  const {type} = action;

  switch (type) {
    case TOGGLE_USER_TYPE:
      return {
        isSpaceOwner: !state.isSpaceOwner,
      };
    default:
      return state;
  }
}
