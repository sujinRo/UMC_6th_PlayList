import styled from 'styled-components';
import PlayBox from '../components/Player/PlayBox';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/cartSlice';

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

const Hr = styled.hr`
  width: 100%;
  background-color: black;
  border: 0;
  height: 1px;
`;

const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

const Text = styled.div`
  font-size: 9px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 9px;
  font-weight: 600;
  text-align: center;
  width: 100px;
  height: 25px;
  border: 1px solid red;
  border-radius: 2px;
  color: red;
  margin-bottom: 30px;
  cursor: pointer;
`;

export default function MainPage() {
  const state = useSelector((state) => state.player);
  const dispatch = useDispatch();
  let totalPrice = 0;

  const onRemove = () => {
    state.map((item) => dispatch(remove(item.id)));
  };

  return (
    <Container>
      <Title>당신이 선택한 음반</Title>
      <List>
        {state.map((item, idx) => {
          const amount = item.amount;
          totalPrice += amount * item.price;
          return (
            <PlayBox
              key={idx}
              src={item.img}
              title={item.title}
              singer={item.singer}
              d
              price={item.price}
              id={item.id}
              amount={item.amount}
            />
          );
        })}
      </List>
      <Hr />
      <TotalPrice>
        <Text>총 가격</Text>
        <Text>₩ {totalPrice}</Text>
      </TotalPrice>
      <Button onClick={onRemove}>장바구니 초기화</Button>
    </Container>
  );
}
