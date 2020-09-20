import styled from 'styled-components';

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

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const BtnButton = styled.button`
  border-style: none;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  background: #30a7d7;
  color: #fff;
  font-size: 1em;
`;
