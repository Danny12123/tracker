import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/GlobalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

function ExpenseForm() {
    const {addExpense, error,setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: "",
    })

    const {title,amount,date,category,description} = inputState;
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }
    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
      setInputState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: "",
      })
    }
  return (
    <FormStyled onSubmit={handleSubmit}> 
    {error && <p className='error'> {error} </p>}
        <div className='input-control'>
            <input type="text" 
            value={title}
            placeholder="Write your expense title"
            onChange={handleInput('title')}
            />
            <input type="text" 
            value={amount}
            id='amount'
            placeholder="Amount"
            onChange={handleInput('amount')}
            />
            <div className='input-control'>
                <DatePicker id='date' placeholderText='Enter a date' selected={date} dateFormat='dd/MM/yyyy' onChange={(date) => {
                    setInputState({...inputState, date: date})
                }}
                 />
            </div>
        </div>
        <div className='selects input-control'>
            <select required value={category} name="category" id='category' onChange={handleInput('category')}>
                <option value="" disabled> Select Option </option>
                <option value="education" > Education  </option>
                <option value="groceries" > Groceries  </option>
                <option value="health" > Health  </option>
                <option value="subscription" > Subscription  </option>
                <option value="takeaways" > Takeaway  </option>
                <option value="clothings" > Clothings  </option>
                <option value="travelling" > Travelling  </option>
                <option value="other" > Other  </option>
            </select>
        </div>
        <div className='input-control'>
            <textarea name='description' value={description} placeholder="description" id='description' cols={30} rows={4} onChange={handleInput('description')}

            />
        </div>
        <div className='submit-btn'>
           
            <Button 
            name={'Add Expense'}  
            icon={plus}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={ '#F56692'}
            color={'#fff'}
            hColor={'red'}
            />
        </div>
    </FormStyled>
  )
}
const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width: 100%
    }
}
.selects{
    display: flex;
    justify-content: flex-end;
    select{
        color:  rgba(34, 34, 96, 0.4);
        &:focus, &:active{
            color: rgba(34, 34, 96, 1);
        }
    }
}
 --color-green: #42AD00;
 
.submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}
`
export default ExpenseForm;