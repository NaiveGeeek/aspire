import styled from "styled-components";
import color from "../../colorConstant";
import ActionBar from "./CardActions";
import Accordian from "../../Component/CommonComponent/Accordian";
import cardDetails from "../../assets/card details.svg";
import { useRef, useState } from "react";
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
import Slider from "react-slick";
import logo from "../../assets/green logo mobile.svg";
const Container = styled.div`
  position: relative;
  height: 100vh;
  z-index: 0;
`;

const TopContainer = styled.div`
  background-color: ${color.darkBlue};
  padding: 0 24px;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
`;
const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 24px;
  width: 25px;
  height: 25px;
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
  position: relative;
  z-index: 3;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const CardPage = () => {
  const [cardData, updateCardData] = useState(data);
  const [selectedCard, setSelectedCard] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const SliderRef = useRef();
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const handleDelete = () => {
    if (cardData.length > 1) {
      const updatedCardData = cardData.filter((_, i) => i !== selectedCard);
      SliderRef.current.slickGoTo(0);
      setSelectedCard(0);
      updateCardData(updatedCardData);
    }
  };
  const handleFrozen = () => {
    const updatedCardData = cardData.map((card, i) => {
      if (i === selectedCard) {
        card.isFrozen = !card.isFrozen;
      }
      return card;
    });
    updateCardData(updatedCardData);
  };
  return (
    <>
      <Container>
        <NavigationBar />
        <TopContainer>
          <LogoContainer>
            <Image src={logo} alt="logo icon" />
          </LogoContainer>
          <TopBar
            amount={availableAmount}
            handleModalToggle={handleModalToggle}
          />
          <Tabs />
          <Slider
            ref={(slider) => {
              SliderRef.current = slider;
            }}
            {...settings}
            swipeToSlide={true}
            swipe={true}
            afterChange={(e) => {
              setSelectedCard(e);
            }}
          >
            {cardData.map((card) => {
              const { firstName, lastName, cardNumber, cvv, validThrough } =
                card;
              return (
                <CreditCard
                  firstName={firstName}
                  lastName={lastName}
                  cardNumber={cardNumber}
                  cvv={cvv}
                  validThru={validThrough}
                  key={card.id}
                  isFrozen={isFrozen}
                />
              );
            })}
          </Slider>
        </TopContainer>
        <BottomContainer>
          <ActionBar
            handleDelete={handleDelete}
            handleFrozen={handleFrozen}
            isFrozen={isFrozen}
          />
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
        <ReactModal
          isOpen={isModalOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={handleModalToggle}
        >
          <CreditCardForm
            handleModalToggle={handleModalToggle}
            submitCardData={updateCardData}
          />
        </ReactModal>
      </ModalContainer>
    </>
  );
};

export default CardPage;
