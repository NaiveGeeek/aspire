import styled from "styled-components";
import color from "../../colorConstant";
import ActionBar from "./CardActions";
import Accordian from "../../Component/CommonComponent/Accordian";
import cardDetails from "../../assets/card details.svg";
import { useState } from "react";
import { data } from "../../data";
import CardDetails from "../../Component/CommonComponent/CardDetails";
import transaction from "../../assets/Transaction.svg";
import TransactionDetails from "./TransactionDetails";
import TopBar from "../../Component/CommonComponent/TopBar";
import CreditCard from "../../Component/CommonComponent/CreditCard";
import Tabs from "../../Component/CommonComponent/Tabs";
import ReactModal from "react-modal";
import CreditCardForm from "../../Component/CommonComponent/CreditCardForm";
import NavigationBar from "../../Component/MobileComponent/Navigation";

const Container = styled.div`
  position: relative;
  height: 100vh;
  z-index:0;
`;

const TopContainer = styled.div`
  background-color: ${color.darkBlue};
  padding: 0 24px;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
`;

const BottomContainer = styled.div`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  position: absolute;
  top: 65%;
  background-color: ${color.white};
  padding-bottom: 84px;
`;
const ModalContainer = styled.div`
position:relative;
z-index:3;
`
const CardPage = () => {
  const [cardData, updateCardData] = useState(data);
  const [selectedCard, setSelectedCard] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    isFrozen,
    firstName,
    lastName,
    transactions,
    cardNumber,
    validThrough,
    availableAmount,
    cvv,
  } = cardData[selectedCard];
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Container>
        <NavigationBar/>
        <TopContainer>
          <TopBar
            amount={availableAmount}
            handleModalToggle={handleModalToggle}
          />
          <Tabs />
          <CreditCard
            firstName={firstName}
            lastName={lastName}
            cardNumber={cardNumber}
            cvv={cvv}
            validThru={validThrough}
          />
        </TopContainer>
        <BottomContainer>
          <ActionBar />
          <Accordian title={"Card details"} icon={cardDetails}>
            <CardDetails
              firstName={firstName}
              lastName={lastName}
              cardNumber={cardNumber}
              validThrough={validThrough}
              cvv={cvv}
            />
          </Accordian>
          <Accordian title={"Recent Transactions"} icon={transaction}>
            <TransactionDetails transactions={transactions} />
          </Accordian>
        </BottomContainer>
      </Container>
      <ModalContainer>
      <ReactModal isOpen={isModalOpen} shouldCloseOnOverlayClick={true} onRequestClose={handleModalToggle}>
        <CreditCardForm handleModalToggle={handleModalToggle} />
      </ReactModal>
      </ModalContainer>
    </>
  );
};

export default CardPage;
