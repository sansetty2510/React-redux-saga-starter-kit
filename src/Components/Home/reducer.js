import {
  SIMPLE_ACTION,
  GET_CHARACTER_DATA,
  GET_CHARACTER_DATA_SUCCESS,
  GET_CHARACTER_DATA_FAIL
} from './constant';

const initialState = {
  charaterData: { name: undefined },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        homeData: action.payload
      };
    case GET_CHARACTER_DATA:
      return {
        ...state,
        charaterData: []
      };
    case GET_CHARACTER_DATA_SUCCESS:
      return {
        ...state,
        charaterData: action.payload.character,
      };
    case GET_CHARACTER_DATA_FAIL:
      return {
        ...state,
        teacherData: []
      };
    default:
      return state;
  }
};
