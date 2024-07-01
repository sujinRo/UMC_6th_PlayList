import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
`;

const Img = styled.img`
  height: 60px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 9px;
  font-weight: 600;
`;

const Price = styled.div`
  color: gray;
`;

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Amount = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

export default function PlayBox({ src, title, singer, price, amount }) {
  return (
    <Container>
      <Box>
        <Img src={src} alt={title} />
        <TitleBox>
          <div>
            {title} | {singer}
          </div>
          <Price>{price}</Price>
        </TitleBox>
      </Box>
      <AmountBox>
        <Arrow>△</Arrow>
        <Amount>{amount}</Amount>
        <Arrow>▽</Arrow>
      </AmountBox>
    </Container>
  );
}
