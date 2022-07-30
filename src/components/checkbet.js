import React,{useCallback, useState} from 'react';
import { useFetch } from './globalContext';
import {Link} from 'react-router-dom'
import NavBar from './navbar';
import { bettingPrice } from '../API/buttonapi';
import Modal from './modal';
import{FaTimes}from 'react-icons/fa'
import Footer from './footer';

const CheckBet = () => {
  const{Pop,popup}=useFetch()
  const [num, setNum] = useState('');
  const [price, setPrice] = useState(bettingPrice);
  const [win, setWin] = useState(0);
  const { betItem ,remove,drawItem,removeDraw,awayItem,removeaway} = useFetch()
  const date = Date()

    let totalOdds = betItem.reduce((total, item) => {
    const { odd1 } = item
    return total += odd1
  }, 0)
    let drawOdds = drawItem.reduce((total, item) => {
    const { draw } = item
    return total += draw
  }, 0)
   
    let awayOdds = awayItem.reduce((total, item) => {
    const { odd2 } = item
    return total += odd2
  }, 0)
   
  const Total = totalOdds + drawOdds + awayOdds;
  const handleVal = (e) => {
    e.preventDefault()
    if (num) {
      
      setWin(num * Total)
      setNum('')
    }
  }
  const bet = (num) => {
    setWin(num * Total)
  }

  if (betItem.length + drawItem.length + awayItem.length <=0) {
    return (
      <>
        <NavBar />
        <div>
          
           
        <h1 className='info'>no bet played yet.....</h1>
        </div>
       
          
      </>
    )
  }

  return (
    <>
     
      <NavBar />
      <Modal/>
      <div className= {popup ?'back-show' :'match-cont'}>
       

        {betItem.map((bets, index) => {
          
          const{id}=bets
          return (
              
            <ul className='match-info' key={bets.id}>
       <li>{bets.fixedMatch}</li>
        <li className='win'>{bets.odd1}</li>
      <li><span>{date }</span></li>
              <button onClick={()=>remove(id)} className='
                removebet'><FaTimes className='timeslogoremove' /></button>
</ul>
        )
      })}
        {drawItem.map((draw, index) => {
          const{id}=draw
          return (
              
            <ul className='match-info' key={id}>
              <li>{draw.fixedMatch}</li>
    
              <li className='draw'>
                {draw.draw}
              </li>
      <li><span>{date }</span></li>
              <button onClick={()=>removeDraw(id)} className='
                removebet'><FaTimes className='timeslogoremove' /></button>
</ul>
        )
      })}
        {awayItem.map((away, index) => {
          const{id}=away
          return (
              
            <ul className='match-info' key={id}>
              <li>{away.fixedMatch}</li>
    
              <li className='away'>
                {away.odd2}
              </li>
      <li><span>{date }</span></li>
              <button onClick={()=>removeaway(id)} className='
                removebet'><FaTimes className='timeslogoremove' /></button>
</ul>
        )
      })}
      </div>
         
      <div className="winning">
        <div>
          <h3>total odd : {Total} </h3>
<br />
          <h3 className='bet-with'>bet with :</h3>
          <div className='betprice'>
            
            {price.map((betPrice) => {
              const{num}=betPrice
              return (
                <ul key={num}>
                  <button className='bet-btn' onClick={()=>bet(num)}>{num }</button>
        </ul>
              )
            })}
          <form>
            <input type="number" value={num} placeholder='select price' onChange={(e) => setNum(e.target.value)} />
            <button className='form-btn' onClick={handleVal}>enter</button>
          </form>
            </div>
          <h3>potential winning : { win}</h3>
</div>

      </div>
      <div className="modal-toggle">
        <button className={`${betItem.length + awayItem.length + drawItem.length > 0 ? ' betshow betnow' : 'betnow'}`} onClick={Pop}>bet now</button>
      </div>
      <Footer/>
    </>
  );
}

export default CheckBet;
