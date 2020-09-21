import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NavBar, NavWrapper, NavImg, PokeTotal } from './styles';
import Pikachu from '../../assets/svg/pikachu.svg';

function Navbar() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function loadData() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((res) => setPokemon(res.data));
    }

    loadData();
  }, []);

  return (
    <NavBar>
      <NavWrapper>
        <NavImg>
          <img src={Pikachu} alt="Pikachu" />
        </NavImg>
        <PokeTotal to="/">
          <p>
            total de <span>{pokemon.count}</span> Pokemons
          </p>
        </PokeTotal>
      </NavWrapper>
    </NavBar>
  );
}

export default Navbar;
