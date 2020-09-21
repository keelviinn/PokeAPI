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

export const Layout = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const BtnButton = styled.button`
  border-style: none;
  padding: 5px 50px;
  margin-right: 10px;
  border-radius: 6px;
  background: #30a7d7;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#30a7d7')};
  }
`;
