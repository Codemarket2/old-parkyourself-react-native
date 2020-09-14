const {TOGGLE_USER_TYPE, ADD_LISTING} = require('../actions/types');

const initialState = {
  isSpaceOwner: false,
  listings: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case TOGGLE_USER_TYPE:
      return {
        ...state,
        isSpaceOwner: !state.isSpaceOwner,
      };
    case ADD_LISTING: {
      console.log('In user reducer add listing');
      console.log(payload);
      return {
        ...state,
        listings: [...state.listings, payload],
      };
    }
    default:
      return state;
  }
}
