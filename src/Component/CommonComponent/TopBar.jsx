import styled from "styled-components";
import color from "../../colorConstant";
import plus from "../../assets/plus.svg";
import wplus from "../../assets/white plus.svg";

const Header = styled.div`
  background-color: transparent;
  display: flex;
  margin: 16px 0px;
  align-items: flex-end;
`;
const AmountSection = styled.div`
  display: flex;
  flex-flow: column;
`;
const AccountBalanceText = styled.span`
  font-size: 14px;
  line-height: 2;
  color: ${props=>props.desktop?color.black:color.white};
  display: inline-block;
  margin-bottom: 10px;
`;
const AmountContainer = styled.div`
  display: flex;
`;
const AccountRectangle = styled.span`
  height: 22px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  font-size: 12px;
  line-height: 4;
  background-color: ${color.green};
  border-radius: 4px;
  margin-right: 10px;
`;
const Amount = styled.div`
  font-size: 24px;
  line-height: 4px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props=> props.desktop?color.black:color.white};
`;
const Button = styled.button`
  background-color: ${props=>props.desktop?color.darkBlue:'transparent'};
  color: ${props=>props.desktop?color.white:'#23cefd'};
  border: none;
  margin-left: auto;
  display: flex;
  font-size: 14px;
  line-height: 17px;
  cursor:pointer;
  border-radius:4px;
  padding:${props=>props.desktop?'8px 12px':'0px'};
  height:${props=>props.desktop?'35px':'auto'};
  width:${props=>props.desktop?'109px':'auto'}
`;
const ButtonIcon = styled.span`
  display: flex;
  widht: 16px;
  height: 16px;
  margin-right: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const TopBar = ({ amount=0 , handleModalToggle, isDesktop=false}) => {
  return (
    <Header>
      <AmountSection>
        <AccountBalanceText desktop={isDesktop}>Account balance</AccountBalanceText>
        <AmountContainer>
          <AccountRectangle>
            <span>S$</span>
          </AccountRectangle>
          <Amount desktop={isDesktop}>
            <span>{Number(amount).toLocaleString()}</span>
          </Amount>
        </AmountContainer>
      </AmountSection>
      <Button desktop={isDesktop} onClick={handleModalToggle}>
        <ButtonIcon>
          <Image src={ isDesktop?wplus:plus} alt="icon" />
        </ButtonIcon>{" "}
        New Card
      </Button>
    </Header>
  );
};
export default TopBar;
