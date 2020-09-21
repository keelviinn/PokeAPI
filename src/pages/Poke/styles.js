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
  margin-bottom: 5rem;
  padding: 1.5rem 3.75rem;
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

  p {
    font-size: 16px;
    color: #686868;

    span {
      font-size: 20px;
      font-weight: bold;
      color: #284de0;
    }
  }
`;
