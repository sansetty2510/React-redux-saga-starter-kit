import {
  put, takeLatest
} from 'redux-saga/effects';
import { GET_CHARACTER_DATA }
  from './constant';
import {
  getCharacterSuccess, getCharacterFail
} from './action';
import getData from '../../api/request';

function* getCharacter() {
  try {
    const data = yield getData('https://rickandmortyapi.com/api/character/');
    yield put(getCharacterSuccess(data.results[0]));
  } catch (e) {
    yield put(getCharacterFail());
  }
}

function* homeSaga() {
  yield takeLatest(GET_CHARACTER_DATA, getCharacter);
}

export default homeSaga;
