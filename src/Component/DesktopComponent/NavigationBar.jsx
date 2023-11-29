import styled from "styled-components";
import color from "../../colorConstant";
import logo from '../../assets/green logo.svg'
import { navagtionData } from "../../constant";
const NavigationContainer = styled.div`
position:fixed;
height:100%;
width:340px;
padding:48px;
background-color:${color.darkBlue};
display:flex;
flex-flow:column;
`
const Logo = styled.div`
height:35px;
width:125px;
`
const Image = styled.img`
width:100%;
height:100%;
` 
const TextContainer = styled.span`
display:inline-block;
width:100%;
margin-top:20px;
font-size:14px;
opacity:0.3;
color:${color.white}
`
const MenuContainer =styled.div`
margin-top:80px;
`
const Menu = styled.div`
display:flex;
margin-bottom: ${props=>props.last?'0px':'40px'};
`
const MenuLogo=styled.div`
height:24px;
width:24px;
`
const MenuContent = styled.span`
display:inline-block;
margin-left:16px;
font-size:16px;
color:${props=>props.active?color.green:color.white}
`
const NavigationBar =()=>{
    return <NavigationContainer>
        <Logo>
            <Image src={logo} alt="logo icon"/>
        </Logo>
        <TextContainer>
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </TextContainer>
        <MenuContainer>
          {navagtionData.map((el,i)=>{
            return <Menu last={navagtionData.length-1 === i} key={el.id}> 
                <MenuLogo>
                    <Image src={el.icon} alt="icon"/>
                </MenuLogo>
                <MenuContent active={el.id === 2}>
                   {el.title}
                </MenuContent>
            </Menu>
          })}  
        </MenuContainer>
    </NavigationContainer>
}

export default NavigationBar;