import styled from "styled-components";
import color from "../../colorConstant";
import showeye from "../../assets/showEye.svg";
import { useState } from "react";
import logo from '../../assets/logo white.svg';
import visa from '../../assets/Visa Logo.svg';
const CreditCardContainer = styled.div`
  position: relative;
  height: 260px;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
  opacity:${(props=>props.isFrozen?'0.7':'1')};
`;
const TopCard = styled.div`
  position: absolute;
  height: 60px;
  width: 60%;
  padding: 5px 10px;
  background-color: ${color.white};
  right: 0;
  top: 0;
  border-radius: 4px;
`;
const TopCardButton = styled.button`
  border: none;
  display: flex;
  height: 30px;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;
const ShowIcon = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const ShowIconText = styled.span`
  font-size: 100%;
  line-height: 4px;
  font-weight: 700;
  color: ${color.green};
`;
const MainCard = styled.div`
  border-radius: 12px 12px 12px 12px;
  background-color: ${(props) => (props.even ? color.cardBlue : color.green)};
  padding: 24px;
  display: flex;
  flex-flow: column;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 220px;
  
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${color.white};
  border-radius: 100%;
  margin: 0px 2px;
  display: inline-block;
`;
const NameContainer = styled.div`
  font-size: 22px;
  letter-spacing: 0.5px;
  color: ${color.white};
  font-weight: 700;
  margin:10px 0;
`;
const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DotContainer = styled.span`
  font-size: 14px;
  letter-spacing: 2px;
  color: ${color.white};
  font-weight: 700;
  margin: 10px 0px;
`;
const DetailsContainer = styled.div`
  display: flex;
  margin: 10px 0px;
`;
const ValidityContainer = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${color.white};
`;
const CvvContainer = styled(ValidityContainer)`
  margin-left: 20px;
  display: flex;
`;
const StarContainer = styled.span`
  font-size: 35px;
  font-weight: 700;
  line-height: 26px;
  margin-left: 5px;
`;
const LogoContainer =styled.div`
display:flex;
`;
const Logo = styled.div`
height:22px;
width:74px;
margin-left:auto;
`;
const VisaLogo=styled.div`
height:20px;
width:60px;
margin-left:auto;
`;
const CreditCard = ({ firstName, lastName, cardNumber, validThru, isFrozen=false }) => {
  const [showNumber, setShowNumber] = useState(false);
  const [first = "", second = "", third = "", last = ""] =
    cardNumber?.split("-") || [];
  const [month, year] = validThru?.split("/") || [];
  return (
    <CreditCardContainer isFrozen={isFrozen}>
      <TopCard>
        <TopCardButton onClick={() => setShowNumber(!showNumber)}>
          <ShowIcon>
            <Image src={showeye} alt="show-icon" />
          </ShowIcon>
          <ShowIconText>
            {showNumber ? "Hide " : "Show "} Card Number
          </ShowIconText>
        </TopCardButton>
      </TopCard>
      <MainCard >
        <LogoContainer>
            <Logo>
                <Image src={logo} alt="logo"/>
            </Logo>
        </LogoContainer>
        <NameContainer>
          {firstName} {lastName}
        </NameContainer>
        <CardNumberContainer>
          <DotContainer>
            {showNumber ? (
              first
            ) : (
              <>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
              </>
            )}
          </DotContainer>
          <DotContainer>
            {showNumber ? (
              second
            ) : (
              <>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
              </>
            )}
          </DotContainer>
          <DotContainer>
            {showNumber ? (
              third
            ) : (
              <>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
              </>
            )}
          </DotContainer>
          <DotContainer>{last}</DotContainer>
        </CardNumberContainer>
        <DetailsContainer>
          <ValidityContainer>
            Thru: {month}/{year}
          </ValidityContainer>
          <CvvContainer>
            CVV:<StarContainer>***</StarContainer>
          </CvvContainer>
        </DetailsContainer>
        <LogoContainer>
            <VisaLogo>
                <Image src={visa} alt="visa logo"/>
            </VisaLogo>
        </LogoContainer>
      </MainCard>
    </CreditCardContainer>
  );
};

export default CreditCard;
