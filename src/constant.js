import home from './assets/Logo.svg';
import card from './assets/pay.svg';
import payment from './assets/Payments.svg';
import credit from './assets/Credit.svg';
import account from './assets/Account.svg';
import Freeze from './assets/Freeze card.svg';
import Delete from './assets/Deactivate card.svg';
import spendLimit from './assets/Set spend limit.svg';
import gpay from './assets/GPay.svg';
import replace from './assets/Replace card.svg';

export const navagtionData = [{
    id:1,
    icon:home,
    title:'Home',
},{
    id:2,
    icon:card,
    title:'Cards',
},{
    id:3,
    icon:payment,
    title:'Payments',
},{
    id:4,
    icon:credit,
    title:'Credit',
},{
    id:5,
    icon:account,
    title:'Account',
}];

export const  ActionData = [{
    id:1,
    icon:Freeze,
    title:'Freeze card'
},
{
    id:2,
    icon:spendLimit,
    title:'Set spend limit'
},{
    id:3,
    icon: gpay,
    title:'Add to GPay'
},
{
    id:4,
    icon:replace,
    title:'Replace card'
},{
    id:5,
    icon:Delete,
    title:'Cancel card'
}
] 

export const months = [1,2,3,4,5,6,7,8,9,10,11,12];