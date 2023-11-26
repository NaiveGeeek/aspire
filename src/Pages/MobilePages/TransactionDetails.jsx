import styled from "styled-components";
import color from "../../colorConstant";
import file from "../../assets/file-storage.svg"
import cardIcon  from '../../assets/business-and-finance.svg';
const CardSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid;
  border-color: #F0F0F0;
  border-top:none;
  padding: 24px;
`;
const TransactionContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
const IconContainer = styled.div`
width:48px;
height:48px;
margin-right:12px;
border-radius:50%;
background-color:${color.lightBlue};
display:flex;
align-items:center;
justify-content:center;
`;
const Image = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
const TransactionText = styled.div`
  display: flex;
  flex-flow: column;
`;
const TransactionTitle = styled.span`
  display: inline-block;
  color: ${color.black};
  font-size: 14px;
  line-height:2;
`;
const TransactionDate = styled.span`
  display: inline-block;
  color: #aaaaaa;
  font-size: 14px;
  line-height:2;

`;
const TransactionType = styled.span`
  display: inline-flex;
  color: ${color.darkBlue};
  font-size: 12px;
  align-items:center;
  line-height:2;

`;
const SmallIconContainer = styled.div`
width:24px;
height:24px;
margin-right:6px;
border-radius:50%;
background-color:${color.darkBlue};
display:flex;
align-items:center;
justify-content:center;
`;

const AmountSection = styled.div`
  color: ${(props) => (props.type === "debit" ? color.black : color.green)};
  font-weight: 700;
  font-size: 16px;
`;

const HorizontalBar = styled.div`
  background-color: #f5f5f5;
  height: 1px;
  width: 100%;
  margin: 16px 0px;
`;
const FooterSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  border-radius: 0px 0px 4px 4px;
  align-items: center;
  color:${color.green};
  background-color:#DDFFEC;
  padding:16px;
`;
const TransactionDetails = ({ transactions }) => {
  return (
    <>
    <CardSection>
      {transactions.map((el, i) => {
        return (
          <div key={i}>
            <TransactionContainer>
              <IconContainer>
                <Image height={"16px"} width={"16px"} src={file} alt="icon"/>
              </IconContainer>
              <TransactionText>
                <TransactionTitle>Hemley</TransactionTitle>
                <TransactionDate>20/03/2020</TransactionDate>
                <TransactionType>
                  <SmallIconContainer>
                    <Image height="10px" width="10px" src={cardIcon} alt="icon" />
                  </SmallIconContainer>
                  <span>Refund On debit card</span>
                </TransactionType>
              </TransactionText>
              <AmountSection>+ S$ 150</AmountSection>
            </TransactionContainer>
            {i !== transactions.length - 1 ? <HorizontalBar /> : null}
          </div>
        );
      })}
    </CardSection>
    <FooterSection>
        view all card transactions
    </FooterSection>
    </>
  );
};

export default TransactionDetails;
