import styled from "styled-components";
import color from "../../colorConstant";
import { ActionData } from "../../constant";

const ActionContainer = styled.div`
height:116px;
padding:0px 24px;
border-radius:${props=>props.desktop?'8px': '20px 20px 0px 0px'};
background-color:${color.lightBlue};
display:flex;
flex-flow:row;
justify-content:space-around;
max-width:${props=>props.desktop?'370px':'auto'};
margin: ${props=>props.desktop? '40px auto 0px':'none'};
`;

const IconContainer = styled.div`
display:flex;
flex-flow:column;
align-items:center;
justify-content:center;
cursor:pointer;
`
const Icon = styled.div`
height:32px;
width:32px;
`
const Image = styled.img`
width:100%;
height:100%;
`
const Title = styled.span`
font-size:13px;
text-align:center;
display:inline-block;
color:${color.darkBlue};
max-width:78px;
`
const ActionBar = ({handleDelete,isFrozen,handleFrozen, isDesktop=false})=>{
 const handleClick = (id)=>{
  if(id === 0){
   handleFrozen();
  }else if(id === 4){
    handleDelete();
  }
 }

    return <ActionContainer desktop={isDesktop}>
        {ActionData.map((el,i)=>{
            return <IconContainer key={el.id} onClick={()=>handleClick(i)}>
            <Icon>
              <Image src={el.icon}/>
            </Icon>  
            <Title>
              {el.id === 1 && isFrozen?'Unfreeze card':el.title}
            </Title>
          </IconContainer>
        })}
    </ActionContainer>
}

export default ActionBar;