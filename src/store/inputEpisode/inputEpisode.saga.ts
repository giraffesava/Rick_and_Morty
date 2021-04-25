import { takeLatest, call, put, delay } from 'redux-saga/effects'
import {
  inputEpisodeSuccess,
  inputEpisodeFailed,
  InputEpisode,
} from './inputEpisode.action'

const getUrl = (name) =>
  fetch(
    `https://rickandmortyapi.com/api/episode/?name=${name.name}`,
  ).then((res) => res.json())

function* inputEpisodeWorker(name) {
  try {
    yield delay(500)
    const data = yield call(getUrl, name)
    const dataArr = data.results
    yield put(inputEpisodeSuccess(dataArr))
  } catch {
    yield put(inputEpisodeFailed())
  }
}

export function* inputEpisodeWatcher(): Generator {
  yield takeLatest(InputEpisode.EPISODE_INPUT_GET, inputEpisodeWorker)
}
