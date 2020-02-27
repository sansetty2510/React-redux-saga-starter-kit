import {
  SIMPLE_ACTION,
  GET_CHARACTER_DATA,
  GET_CHARACTER_DATA_SUCCESS,
  GET_CHARACTER_DATA_FAIL
} from './constant';

export const simpleAction = () => ({
  type: SIMPLE_ACTION,
  payload: 'data from store'
});

export const getCharacter = () => ({
  type: GET_CHARACTER_DATA
});


export const getCharacterSuccess = character => ({
  type: GET_CHARACTER_DATA_SUCCESS,
  payload: {
    character
  }
});
export const getCharacterFail = () => ({
  type: GET_CHARACTER_DATA_FAIL,
});
