import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PokeWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GoToMain = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2rem;
  padding: 1rem 3.75rem;
  background: #30a7d7;
  border-radius: 6px;
  border: 0;
  transition: background-color 0.3s;
  color: #fff;

  svg {
    margin-right: 1.5rem;
    font-size: 1.6rem;
  }

  strong {
    font-size: 16px;
  }

  &:hover {
    background: ${shade(0.2, '#30a7d7')};
  }
`;

export const Title = styled.h1`
  color: #686868;
  font-weight: 400;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-size: 36px;

  span {
    font-weight: 700;
  }
`;

export const PokeItensWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PokeImg = styled.div`
  padding: 1.75rem;
  margin-right: 1.2rem;
`;

export const PokeInfos = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const PokeInfoItem = styled.li`
  list-style: none;
  /* border-bottom: 1px solid #d0d0d0; */

  p {
    font-size: 22px;
    color: #686868;

    span {
      font-size: 26px;
      font-weight: bold;
      color: #284de0;
    }
  }
`;
