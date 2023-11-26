import styled from "styled-components";
import { navagtionData } from "../../constant";
import color from "../../colorConstant";

const Navigation = styled.div`
display:flex;
flex-flow:row;
justify-content:space-around;
position:fixed;
bottom:0;
width:100%;
box-shadow:0 2px 6px;
background-color:#fff;
height:56px;
z-index:2;
`;

const IconContainer = styled.div`
display:flex;
flex-flow:column;
align-items:center;
justify-content:center;
`
const Icon = styled.div`
height:24px;
width:24px;
`
const Image = styled.img`
width:100%;
height:100%;
`
const Title = styled.span`
font-size:9px;
text-align:center;
display:inline-block;
color:${props=>props.active?color.green:color.gray};
`
const NavigationBar = ()=>{
    return <Navigation>
      {navagtionData.map((el)=>{
       return <IconContainer key={el.id}>
          <Icon>
            <Image src={el.icon}/>
          </Icon>  
          <Title active={el.id === 2}>
            {el.title}
          </Title>
        </IconContainer>
      })}
    </Navigation>
}
export default NavigationBar;