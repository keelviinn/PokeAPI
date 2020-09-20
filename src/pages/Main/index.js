import React, { useState, useEffect } from 'react';

import { getAllPokemon, getPokemon } from '../../services/service';

import Cards from '../../components/Cards';
import Pagination from '../../components/Paginations';

import { GridContainer, GridArea, ItemLink } from './styles';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const response = await getAllPokemon(currentPageUrl);

      setLoading(false);
      setNextPageUrl(response.next);
      setPrevPageUrl(response.previous);
      await loadPokemon(response.results);
    }
    fetchData();
  }, [currentPageUrl]);

  async function loadPokemon(data) {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <>
      <div>
        {loading ? (
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        ) : (
          <div>
            <GridContainer>
              {pokemonData.map((pokemon) => {
                return (
                  <GridArea>
                    <ItemLink to={pokemon.name}>
                      <Cards key={pokemon} pokemon={pokemon} />
                    </ItemLink>
                  </GridArea>
                );
              })}
              <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
              />
            </GridContainer>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
