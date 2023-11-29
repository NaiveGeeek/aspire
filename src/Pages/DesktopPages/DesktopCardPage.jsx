import styled from "styled-components";
import NavigationBar from "../../Component/DesktopComponent/NavigationBar";
import { useRef, useState } from "react";
import { data } from "../../data";
import TopBar from "../../Component/CommonComponent/TopBar";
import Tabs from "../../Component/CommonComponent/Tabs";
import Card from "../../Component/CommonComponent/Card";
import Slider from "react-slick";
import CreditCard from "../../Component/CommonComponent/CreditCard";
import Accordian from "../../Component/CommonComponent/Accordian";
import CardDetails from "../../Component/CommonComponent/CardDetails";
import TransactionDetails from "../MobilePages/TransactionDetails";
import transaction from "../../assets/Transaction.svg";
import cardDetails from "../../assets/card details.svg";
import ActionBar from "../MobilePages/CardActions";
import ReactModal from "react-modal";
import CreditCardForm from "../../Component/CommonComponent/CreditCardForm";

const SideBar = styled.div`
  padding: 44px 60px 60px 400px;
`;
const CardContainer = styled.div`
  margin-top: 16px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const SliderContainer = styled.div`
  display: block;
  width: 50%;
`;
const OtherContainer = styled.div`
  display: block;
  width: 50%;
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
      <NavigationBar />
      <SideBar>
        <TopBar
          amount={availableAmount}
          handleModalToggle={handleModalToggle}
          isDesktop={true}
        />
        <Tabs isDesktop={true} />
        <CardContainer>
          <Card desktop={true}>
            <Container>
              <SliderContainer>
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
                    const {
                      firstName,
                      lastName,
                      cardNumber,
                      cvv,
                      validThrough,
                    } = card;
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
                <ActionBar
                  handleDelete={handleDelete}
                  handleFrozen={handleFrozen}
                  isFrozen={isFrozen}
                  isDesktop={true}
                />
              </SliderContainer>
              <OtherContainer>
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
              </OtherContainer>
            </Container>
          </Card>
        </CardContainer>
      </SideBar>
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleModalToggle}
        style={{
            content: {
              maxWidth:'600px',
              margin:'auto'
            }
          }}
      >
        <CreditCardForm handleModalToggle={handleModalToggle} submitCardData={updateCardData} />
      </ReactModal>
    </>
  );
};

export default CardPage;
