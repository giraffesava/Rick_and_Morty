import { put, takeLatest } from 'redux-saga/effects'
import { allEpisodesSuccess, allEpisodesFailed } from './allEpisodes.actions'
import { AllEpisodesTypes } from './allEpisodes.actions'
import { urls } from './../urls'

function* getAllEpisodesWorker() {
  try {
    const data = yield Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json())),
    )
    const data2 = data
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
      .reduce((acc, sn) => {
        const season = Number(sn.episodes.split('E')[0].replace(/[^0-9]/gi, ''))
        acc[season] = [].concat(acc[season] || [], sn)
        return acc
      }, {})
    const res = Object.keys(data2).map((el) => ({
      season: el,
      episodes: data2[el],
    }))
    yield put(allEpisodesSuccess(res))
  } catch (error) {
    yield put(allEpisodesFailed())
  }
}

export function* requestWatcher(): Generator {
  yield takeLatest(AllEpisodesTypes.ALL_EPISODES_REQUEST, getAllEpisodesWorker)
}
