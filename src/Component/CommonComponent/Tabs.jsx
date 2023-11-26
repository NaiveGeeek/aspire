import styled from "styled-components";
import color from "../../colorConstant";

const TabConatainer = styled.div`
  display: flex;
  margin: 10px 0 20px 0px;
`;
const Tab = styled.div`
  width: auto;
  padding: 5px;
  border-bottom: ${(props) => (props.active ? "1px solid #23CEFD" : "none")};
  color: ${color.white};
  font-weight: ${(props) => (props.active ? "700" : "400")};
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  margin-right: 20px;
`;

const Tabs = () => {
  return (
    <TabConatainer>
      <Tab active>My debit cards</Tab>
      <Tab>All company cards</Tab>
    </TabConatainer>
  );
};

export default Tabs;
