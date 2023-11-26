import styled from "styled-components";
import Card from "./Card";
import color from "../../colorConstant";
import upArrow from "../../assets/up-arrow.svg";
import downArrow from "../../assets/down-arrow.svg";
import { useState } from "react";

const AccordianContainer = styled.div`
  background-color: ${color.white};
  margin-top: 24px;
  padding: 0 24px;
`;

const Header = styled(Card)`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : color.white)};
`;
const Icon = styled.div`
  height: 24px;
  width: 24px;
  margin-right: 12px;
`;
const ArrowIcon = styled.div`
  height: 24px;
  width: 24px;
  margin-left: auto;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.span`
  display: inline-block;
  color: ${color.darkBlue};
  font-size: 14px;
`;

const Accordian = ({ title, icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <AccordianContainer>
      <Header color={color.veryLightBlue} onClick={() => setOpen(!open)}>
        <Icon>
          <Image src={icon} alt="icon"></Image>
        </Icon>
        <Title>{title}</Title>
        <ArrowIcon>
          {open ? (
            <Image
              src={upArrow}
              alt="
        up-arrow"
            />
          ) : (
            <Image src={downArrow} alt="down-arrow" />
          )}
        </ArrowIcon>
      </Header>
      <div>{open ? children : null}</div>
    </AccordianContainer>
  );
};

export default Accordian;
