import styled from 'styled-components';
import { CartIcon } from '../assets/icons';

const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #4b44cf;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Icon = styled.div`
  width: 30px;
  cursor: pointer;
  color: white;
`;

export default function Header() {
  return (
    <Container>
      <Title>UMC PlayList</Title>
      <Icon>
        <CartIcon />
      </Icon>
    </Container>
  );
}
