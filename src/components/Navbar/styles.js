import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100vw;

  border-bottom: 1px solid #d0d0d0;
  background-color: #f5e878;
`;

export const NavWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.25rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavImg = styled.div`
  img {
    height: 40px;
  }
`;

export const PokeTotal = styled.p`
  color: #686868;
  font-size: 16px;

  span {
    font-weight: 700;
  }
`;
