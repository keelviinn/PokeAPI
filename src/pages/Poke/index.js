import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import { FiArrowLeft } from 'react-icons/fi';

import {
  Loading,
  GoToMain,
  Title,
  PokeWrapper,
  PokeItensWrapper,
  PokeImg,
  PokeInfos,
  PokeInfoItem,
} from './styles';

function Poke() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState();

  const { params } = useRouteMatch();

  useEffect(() => {
    setLoading(true);
    async function loadData() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
        .then((res) => setPokemon(res.data));

      setLoading(false);
    }

    loadData();
  }, [params.pokemon]);

  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <PokeWrapper>
          <GoToMain to="/">
            <FiArrowLeft />
            <strong>Volta para Home</strong>
          </GoToMain>
          <Title>
            Olá, eu sou <span>{pokemon.name}</span>
          </Title>
          <PokeItensWrapper>
            <PokeImg>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt=""
              />
            </PokeImg>
            <PokeInfos>
              <PokeInfoItem>
                <p>
                  ID: <span>{pokemon.id}</span>
                </p>
              </PokeInfoItem>
              <PokeInfoItem>
                <p>
                  Nome: <span>{pokemon.name}</span>
                </p>
              </PokeInfoItem>
              <PokeInfoItem>
                <p>
                  Experiencia: <span>{pokemon.base_experience}</span>
                </p>
              </PokeInfoItem>
              <PokeInfoItem>
                <p>
                  Altura: <span>{pokemon.height}</span>
                </p>
              </PokeInfoItem>
              <PokeInfoItem>
                <p>
                  Peso: <span>{pokemon.weight}</span>
                </p>
              </PokeInfoItem>
            </PokeInfos>
          </PokeItensWrapper>
        </PokeWrapper>
      )}
    </>
  );
}

export default Poke;
