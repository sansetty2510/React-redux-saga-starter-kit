import { all } from 'redux-saga/effects';
import homeSaga from '../Components/Home/saga';

export default function* rootSaga() {
  yield all([
    homeSaga(),
  ]);
}
