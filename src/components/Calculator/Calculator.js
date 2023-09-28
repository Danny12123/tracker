import React, {useState} from 'react'
import './style.css'

const Calculator = () => {
  const [isTabs, setIsTabs] = useState(1);
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [unitSold, setUnitSold] = useState('');

  const [cPrice, setCPrice] = useState('');
  const [rate, setRate] = useState('');
  
  const [revenue, setRevenue] = useState(0.00);
  const [profite, setProfite] = useState(0.00);
  const [margin, setMargin] = useState(0.00);
  const [commission, setCommission] = useState(0.00);

  const handleCalculator = (e) => {
    e.preventDefault();
    // r =p * us
    let r = price * unitSold;
    setRevenue(r)
    // p = cp - r
    const cp = cost * unitSold
    let p = Math.floor(revenue - cp);
    setProfite(p)
    //m = (p / r) * 100
    const pr = profite / revenue ;
    const m = Math.ceil(pr * 100)
    console.log(m);
    setMargin(m)
    setPrice('')
    setCost('')
    setUnitSold('')
  }
  const handleCalculatorCom = (e) => {
    e.preventDefault();
    let a = cPrice / 100 * rate;
    setCommission(a);
  }

  return (
    <div id='calculator'>
      <div className="head_tabs">
       <ul>
        <li className={isTabs===1 ?'li_active': null} onClick={()=>setIsTabs(1)}>Sale</li>
        <li className={isTabs===2 ?'li_active': null} onClick={()=>setIsTabs(2)}>Commission</li>
       </ul>
      </div>

      <div className='tab_body'>
        <div className={ isTabs === 1 ? 'tab_body_1' : "tab_body_null" }>
          <form>
            <div className='tb_input'>
              <label>Price</label>
              <input type="number" required value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='0.00' />
            </div>
            <div className='tb_input'>
              <label>Cost</label>
              <input type="number" required value={cost} onChange={ (e) => setCost(e.target.value) } placeholder='0.00' />
            </div>
            <div className='tb_input'>
              <label>Units Sold</label>
              <input type="number" required value={unitSold} onChange={ (e) => setUnitSold(e.target.value) } placeholder='10' />
            </div>
          <button onClick={handleCalculator}>Calculate</button>
          </form>

          <div className="tb_result">
            <div className="tb_result_box">
              <h5>Revenue</h5>
              <h1>${ revenue}</h1>
            </div>
            <div className="tb_result_box">
              <h5>Profit</h5>
              <h1>${ profite}</h1>
            </div>
            <div className="tb_result_box">
              <h5>Margin</h5>
              <h1>{margin + '.00'}%</h1>
            </div>
          </div>
        </div>
        <div className={ isTabs === 2 ? 'tab_body_1' : "tab_body_null" }>
          <form>
            <div className='tb_input'>
              <label>Price</label>
              <input type="number" required value={ cPrice } onChange={ (e) => setCPrice(e.target.value)} placeholder='0.00' />
            </div>
            <div className='tb_input'>
              <label>Rate</label>
              <input type="number" required value={rate} onChange={ (e) => setRate(e.target.value) } placeholder='0.00' />
            </div>
          <button onClick={handleCalculatorCom}>Calculate</button>
          </form>

          <div className="tb_result">
            <div className="tb_result_box">
              <h5>Commission</h5>
              <h1>${ commission }</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Calculator