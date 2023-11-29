import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFF"};
  border-radius: ${props=>props.desktop?'8px':'4px'};
  padding: 24px;
  display: block;
  box-shadow:${props=>props.desktop?' 0 3px 10px rgb(0 0 0 / 0.2)':'none'}
`;
export default Card;
