import React, { useState, useEffect } from 'react';

import { getAllPokemon, getPokemon } from '../../services/service';
import Card from '../../components/Cards';
import {
  Loading,
  Layout,
  GridContainer,
  Btn,
  BtnButton,
  LinkWrapper,
} from './styles';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPokemon(initialURL);

      setLoading(false);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
    }
    fetchData();
  }, [initialURL]);

  const loadPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const next = async () => {
    if (!nextUrl) return;
    setLoading(true);
    const data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    const data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Layout>
        {loading ? (
          <Loading>Loading...</Loading>
        ) : (
          <>
            <Btn>
              <BtnButton onClick={prev}>Prev</BtnButton>
              <BtnButton onClick={next}>Next</BtnButton>
            </Btn>
            <GridContainer>
              {pokemonData.map((pokemon) => {
                return (
                  <LinkWrapper to={pokemon.name}>
                    <Card key={pokemon.name} pokemon={pokemon} />
                  </LinkWrapper>
                );
              })}
            </GridContainer>
            <Btn>
              <BtnButton onClick={prev}>Prev</BtnButton>
              <BtnButton onClick={next}>Next</BtnButton>
            </Btn>
          </>
        )}
      </Layout>
    </>
  );
}

export default App;
