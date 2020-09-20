import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';

// import { Container } from './styles';

function Poke() {
  const [pokemon, setPokemon] = useState({});

  const { params } = useRouteMatch();

  useEffect(() => {
    async function loadData() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
        .then((res) => setPokemon(res.data));
    }

    loadData();
  }, [params.pokemon]);

  return (
    <>
      <div className="poke-header">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt=""
        />
        <p>{pokemon.name}</p>
        <p>{pokemon.order}</p>
        <p>{pokemon.height}</p>
        <p>{pokemon.id}</p>
        <p>{pokemon.weight}</p>
      </div>
    </>
  );
}

export default Poke;
