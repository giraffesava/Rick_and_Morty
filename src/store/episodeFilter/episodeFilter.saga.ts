import { takeEvery, put, delay } from 'redux-saga/effects'
import {
  EpisodeFilter,
  episodeFilterSuccess,
  episodeFilterFailed,
} from './episodeFilter.action'
import { allEpisodesurls } from './../urls'

function* episodeFilterWorker() {
  try {
    yield delay(2000)
    const data = yield Promise.all(
      allEpisodesurls.map((url) => fetch(url).then((res) => res.json())),
    )
    const data2 = yield data
      .reduce((acc, items) => acc.concat(items.results), [])
      .map((item) => {
        return {
          id: item.id,
          characters: item.characters,
          air_date: item.air_date,
          episodes: item.episode,
          name: item.name,
        }
      })
    const filteredData = data2.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
    )
    yield put(episodeFilterSuccess(filteredData))
  } catch {
    yield put(episodeFilterFailed())
  }
}

export function* episodeFilterWatcher(): Generator {
  yield takeEvery(EpisodeFilter.EPISODES_REQUEST, episodeFilterWorker)
}
