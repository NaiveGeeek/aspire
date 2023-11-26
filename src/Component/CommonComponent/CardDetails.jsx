import styled from "styled-components";
import color from "../../colorConstant";

const CardSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  border-radius: 0px 0px 4px 4px;
  padding: 24px;
  border: 1px solid;
  border-color: #f0f0f0;
  border-top: none;
`;
const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5px 0px;
  width: 100%;
`;
const Label = styled.span`
  color: ${color.gray};
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
`;

const Text = styled.span`
  color: ${color.black};
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
`;
const CardDetails = ({
  firstName,
  lastName,
  validThrough,
  cvv,
  cardNumber,
}) => {
  return (
    <CardSection>
      <TextContainer>
        <Label>First Name :</Label>
        <Text>{firstName}</Text>
      </TextContainer>
      <TextContainer>
        <Label>Last Name :</Label>
        <Text>{lastName}</Text>
      </TextContainer>
      <TextContainer>
        <Label>Card Number :</Label>
        <Text>{cardNumber}</Text>
      </TextContainer>
      <TextContainer>
        <Label>ValidThru :</Label>
        <Text>{validThrough}</Text>
      </TextContainer>
      <TextContainer>
        <Label>CVV :</Label>
        <Text>{cvv}</Text>
      </TextContainer>
    </CardSection>
  );
};

export default CardDetails;
