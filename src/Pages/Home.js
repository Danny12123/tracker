import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import Incomes from '../components/income/Income'
import Expenses from '../components/expenses/Expenses'
import Calculator from '../components/Calculator/Calculator'
import { useMemo, useState } from "react";
import styled from "styled-components";
import Navigation from "../components/navigation/Navigation";
import Orb from "../components/orb/orb";
import { useGlobalContext } from "../context/GlobalContext";
import black from "../images/black.jpeg";
import { MainLayout } from "../styles/layout"
import Container from 'react-bootstrap/Container';

const Home = () => {
    const [active, setActive] = useState(1)
    const global = useGlobalContext()
    // console.log(global);
    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />
            case 2:
                return <Dashboard />
            case 3:
                return <Incomes />
            case 4:
                return <Expenses />
            case 5:
                return <Calculator />

            default:
                return <Dashboard />
        }
    }
    const orbMemo = useMemo(() => {
        return <Orb />
    }, [])
  return (
    <div>
          <AppStyled black={ black } >
              { orbMemo }
              <MainLayout>
                  <Container>
                      <Navigation active={ active } setActive={ setActive } />
                      <main>
                          { displayData() }
                      </main>
                  </Container>
              </MainLayout>
          </AppStyled>
    </div>
  )
}

export default Home;


const AppStyled = styled.div`
min-height: 100vh;
padding: 20px 0;
// background-color:#6610f2;
background-color:#343a40;
// background-image: url(${props => props.black});
position: relative;
// background-size: cover;
// background-repeat: no-repeat;

main{
  flex:1;
  background: #fff;
  box-shadow: 0px 0.53px 5px rgba(0, 0, 0, 0.133);  
  border-radius: 32px;
  overflow-x: hidden;
  &:: -webkit-scrollbar{
    width: 0
  }
}
`;