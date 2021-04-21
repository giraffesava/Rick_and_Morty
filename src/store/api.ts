export const allEpisodes = (): Promise<any> =>
  fetch('https://rickandmortyapi.com/api/episode').then((res) => res.json())
