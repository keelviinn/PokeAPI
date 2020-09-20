import React, { useState, useEffect } from 'react';

import { getAllPokemon, getPokemon } from '../../services/service';
import Card from '../../components/Cards';
import { Layout, GridContainer, Btn, BtnButton } from './styles';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
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

  const loadPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>
      <Layout>
        {loading ? (
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        ) : (
          <>
            <Btn>
              <BtnButton onClick={prev}>Prev</BtnButton>
              <BtnButton onClick={next}>Next</BtnButton>
            </Btn>
            <GridContainer>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
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
