import styled from 'styled-components';
import cartItems from '../assets/cartItem';
import PlayBox from '../components/Player/PlayBox';

const Container = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const List = styled.div`
  dispaly: flex;
  flex-direction: column;
  margin: 30px 0;
`;

export default function MainPage() {
  return (
    <Container>
      <Title>당신이 선택한 음반</Title>
      <List>
        {cartItems.map((item) => (
          <PlayBox
            src={item.img}
            title={item.title}
            singer={item.singer}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </List>
    </Container>
  );
}
