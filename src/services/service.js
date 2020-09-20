import axios from 'axios';

export async function getPokemon({ url }) {
  return axios(url).then((res) => res.data);
}

export async function getAllPokemon(url) {
  return axios(url).then((res) => res.data);
}
