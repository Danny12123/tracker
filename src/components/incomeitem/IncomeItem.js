import React from 'react'
import styled from 'styled-components'
import { dateFormat, timeFormat } from '../../utils/DateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar,food,freelance,income,medical,money,piggy,stocks,takeaway,trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function incomeItem({id,title,amount,date,time, category,description,deleteItem,indicatorColor,type,}) {

    const categoryIcon = () => {
        switch(category){
            case 'salary': 
            return money;
            case 'freelancing': 
            return freelance;
            case 'investment':
                return income;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other': 
                return  piggy;
            default: 
                return ''

        }
    }
    const expenseCatIcon = ()=>{
        switch(category) {
            case 'education': 
               return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscription':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''

        }
    }
  return (
    <IncomeItemStyled indicator={indicatorColor}>
        <div className='icon'>
            {type === 'expense' ? expenseCatIcon() : categoryIcon()}
        </div>
        <div className='content'>
            <h5>{title}</h5>
            <div className='inner-content'>
            <div className='text'>
            <p>{dollar} {amount}</p>
            <p>{calender} {dateFormat(date)}  </p>
            <p>{comment}
             {description}
             </p>
        </div>
        <div className='btn-con'>
            <Button 
            icon={trash}
            bPad={'1rem'}
            bRad={'50%'}
            bg={'#222260'}
            color={'#fff'}
            iColor={'#fff'}
            hColor={'#42AD00'}
            onClick={() => deleteItem(id)}
            />
        </div>
        </div>
        </div>
    </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div`
background: #FCF6F9;
border: 2px solid #FFFFFF;
box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
border-radius: 20px;
padding: 0.5rem;
margin-bottom: 0.5rem;
display: flex;
align-items: center;
gap: 1rem;
width: 100%;
color: #222260;
.icon{
    width: 80px;
    height: 80px;
    border-radius;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-center: center;
    border: 2px solid #ffffff;
    i{
        font-size: 2.6rem;
    }
}
.content{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    h5{
        font-size: 1.3rem;
        padding-left: 2rem;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left:0;
            top: 50%;
            transform: translateY(-50%);
            width: .8rem;
            height: .8rem;
            border-radius: 50%;
            background: ${props => props.indicator}
        }
    }
    .inner-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            display: flex;
            align-items: center;
            gap: 1.5rem;
            p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #222260;
                opacity: 0.8;
                font-size: 1rem;
                
            }
        }
    }
}
`;

export default incomeItem;