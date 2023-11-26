import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFF"};
  border-radius: 4px;
  padding: 24px;
  display: block;
`;
export default Card;
