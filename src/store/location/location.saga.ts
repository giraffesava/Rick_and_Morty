import { call, put, takeEvery } from 'redux-saga/effects'
import { locationUrl } from './../urls'
import {
  locationSuccessAction,
  locationFailedAction,
  Location,
} from './location.actions'

const getUrl = ({ id }) =>
  fetch(`${locationUrl}${id}`).then((res) => res.json())

function* locationWorker(id) {
  try {
    const data = yield call(getUrl, id)
    yield put(locationSuccessAction(data))
  } catch {
    yield put(locationFailedAction())
  }
}

export function* locationWatcher(): Generator {
  yield takeEvery(Location.LOCATION_REQUEST, locationWorker)
}
