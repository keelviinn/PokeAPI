import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: green;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 20px;
`;

export const GridArea = styled.div``;
