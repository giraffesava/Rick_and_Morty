import { call, put, takeEvery } from 'redux-saga/effects'
import {
  charactersSuccess,
  charactersFailed,
  Characters,
} from './characters.actions'

const getEpisode = (episode) =>
  fetch(`https://rickandmortyapi.com/api/episode/${episode.id}`).then((res) =>
    res.json(),
  )

function* getCharactersWorker(episode) {
  try {
    const data = yield call(getEpisode, episode)
    const characters = yield Promise.all(
      data.characters.map((item) => fetch(item).then((res) => res.json())),
    )
    yield put(charactersSuccess(characters))
  } catch (error) {
    yield put(charactersFailed())
  }
}

export function* getCharactersWatcher(): Generator {
  yield takeEvery(Characters.CHARACTERS_REQUEST, getCharactersWorker)
}
