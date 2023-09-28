import Chart from '../chart/Chart'
import { useGlobalContext } from '../../context/GlobalContext';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layout';
import { dollar, income } from '../../utils/Icons';
import History from '../../history/History';
import './style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
    const { totalExpense, incomes, expenses, totalIncome, totalBalance, transactionHistory, getIncome, getExpense, } = useGlobalContext()

    useEffect(() => {
        getIncome()
        getExpense()
    }, [])
    return (
        <div>
            <div id='dash_holder'>
                <h1>All Transactions</h1>
                <div className='stats-con'>
                <Row>
                    <Col md>
                        <div className='chat_holder'>
                            <Chart />
                        </div>

                            <div className='amount-con'>
                                <div className='income'>
                                    <h2>Total Income </h2>
                                    <p>
                                        { dollar } { totalIncome() }
                                    </p>
                                </div>
                                <div className='expense'>
                                    <h2>Total Expense </h2>
                                    <p>
                                        { dollar } { totalExpense() }
                                    </p>
                                </div>
                                <div className='balance'>
                                    <h2>Total Balance </h2>
                                    <p>
                                        { dollar } { totalBalance() }
                                    </p>
                                </div>
                            </div>
                    </Col>
                    <Col md>
                            <History />
                            <h2 className='salary-title'>Min <span> Income </span> Max</h2>
                            <div className='salary-item'>
                                <p>
                                    { Math.min(0, Math.min(...incomes.map((item) => item.amount))) }
                                </p>
                                <p>
                                    { Math.max(0, Math.max(...incomes.map((item) => item.amount))) }
                                </p>
                            </div>
                            <h2 className='salary-title'>Min <span> Expense </span> Max</h2>
                            <div className='salary-item'>
                                <p>
                                    { Math.min(0, Math.min(...expenses.map((item) => item.amount))) }
                                </p>
                                <p>
                                    { Math.max(0, Math.max(...expenses.map((item) => item.amount))) }
                                </p>
                            </div>
                    </Col>
                
                    {/* <div className='chart-con'>

                        <Chart />

                        <div className='amount-con'>
                            <div className='income'>
                                <h2>Total Income </h2>
                                <p>
                                    { dollar } { totalIncome() }
                                </p>
                            </div>
                            <div className='expense'>
                                <h2>Total Expense </h2>
                                <p>
                                    { dollar } { totalExpense() }
                                </p>
                            </div>
                            <div className='balance'>
                                <h2>Total Balance </h2>
                                <p>
                                    { dollar } { totalBalance() }
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='history-con'>
                        <History />
                        <h2 className='salary-title'>Min <span> Income </span> Max</h2>
                        <div className='salary-item'>
                            <p>
                                { Math.min(0, Math.min(...incomes.map((item) => item.amount))) }
                            </p>
                            <p>
                                { Math.max(0, Math.max(...incomes.map((item) => item.amount))) }
                            </p>
                        </div>
                        <h2 className='salary-title'>Min <span> Expense </span> Max</h2>
                        <div className='salary-item'>
                            <p>
                                { Math.min(0, Math.min(...expenses.map((item) => item.amount))) }
                            </p>
                            <p>
                                { Math.max(0, Math.max(...expenses.map((item) => item.amount))) }
                            </p>
                        </div>
                    </div> */}
                    </Row>
                </div>
            </div>
        </div>
    )
}

// const div = styled.div`
// .stats-con{
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     gap: 2rem;
//     .chart-con{
//         grid-column: 1/4;
//         height: 400px;
//         .amount-con{
//             display: grid;
//             grid-template-columns: repeat(4,1fr);
//             gap: 2rem;
//             margin-top: 2rem;
//             .income, .expense{
//                 grid-column: span 2;   
//             }
//             .income, .expense, .balance{
//                 background: #fcf6f9;
//                 border: 2px  solid #ffffff;
//                 box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
//                 padding: 1rem;
//                 border-radius: 20px;
//                 p{
//                     font-size: 3.5rem;
//                     font-weight: 700;
//                 }
//             }
//             .balance{
//                 grid-column: 2/4;
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: center;
//                 align-items: center;
//                 p{
//                     color: green;
//                     opacity: 0.6;
//                     font-size: 4.5rem
//                 }
//             }
//         }
//     }
//     .history-con{
//         grid-column: 4/ -1;
//         h2{
//             margin: 1rem 0;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;

//         }
//         .salary-title{
//             font-size: 1.2rem;
//             span{
//                 font-size: 1.8rem
//             }
//         }
//         .salary-item{
//             background: #fcf6f9;
//             border: 2px  solid #ffffff;
//             box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
//             padding: 1rem;
//             border-radius: 20px;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             p{
//                 font-weight: 600;
//                 font-size: 1.6rem;

//             }
//         }
//     }
// }
// `;

export default Dashboard;