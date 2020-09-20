import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  height: 150px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 7px;
  margin: 20px 0px;
  background-color: #f5e878;
  border-radius: 8px;
`;

export const PokeImg = styled.img`
  background-color: #fff;
  margin: 0 20px;
  border-radius: 50%;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 40px;
`;

export const CardTypesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.h1`
  font-size: 36px;
  color: #284de0;
  line-height: 56px;
`;

export const CartType = styled.p`
  font-size: 16px;
  color: #686868;
  line-height: 22px;
  margin-right: 5px;
`;
