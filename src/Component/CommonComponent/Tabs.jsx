import styled from "styled-components";
import color from "../../colorConstant";

const TabConatainer = styled.div`
  display: flex;
  margin: 10px 0 20px 0px;
`;
const Tab = styled.div`
  width: auto;
  padding: 5px;
  border-bottom: ${(props) =>
    props.active
      ? props.desktop
        ? "2px solid #23CEFD"
        : "1px solid #23CEFD"
      : "none"};
  color: ${(props) => (props.desktop ? color.black : color.white)};
  font-weight: ${(props) => (props.active ? "700" : "400")};
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  margin-right: 20px;
`;

const Tabs = ({ isDesktop = false }) => {
  return (
    <TabConatainer>
      <Tab desktop={isDesktop} active>
        My debit cards
      </Tab>
      <Tab desktop={isDesktop}>All company cards</Tab>
    </TabConatainer>
  );
};

export default Tabs;
