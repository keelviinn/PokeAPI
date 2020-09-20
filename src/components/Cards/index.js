import React from 'react';

import {
  CardWrapper,
  Name,
  PokeImg,
  CardTypesWrapper,
  CardInfoWrapper,
  CartType,
} from './styles';

export default function Card({ pokemon }) {
  return (
    <CardWrapper>
      <PokeImg src={pokemon.sprites.front_default} alt="" />
      <CardInfoWrapper>
        <Name>{pokemon.name}</Name>
        <CardTypesWrapper>
          {pokemon.types.map((type) => {
            return <CartType>{type.type.name}</CartType>;
          })}
        </CardTypesWrapper>
      </CardInfoWrapper>
    </CardWrapper>
  );
}
