import { call, put, delay, takeLatest } from 'redux-saga/effects'
import { allEpisodes } from '../api'
import {
  allEpisodesRequest,
  allEpisodesSuccess,
  allEpisodesFailed,
} from './allEpisodes.actions'

function* getAllEpisodesWorker() {
  try {
    yield delay(2000)
    const data = yield call(allEpisodes)
    // const dataArr = data.items.map((item) => ({}))
    yield put(allEpisodesSuccess(data))
  } catch (error) {
    yield put(allEpisodesFailed())
  }
}

export function* requestWatcher(): Generator {
  yield takeLatest(allEpisodesRequest, getAllEpisodesWorker)
}
