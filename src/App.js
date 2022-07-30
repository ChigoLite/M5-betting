import React from 'react';


import Soccer from './components/soccer';
import CheckBet from './components/checkbet'
import Modal from './components/modal';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Prevmatch from './components/prevmatch';

const App = () => {
  
  return (
  
    <BrowserRouter>
       
      <Routes>
        <Route  path='/' element={ <Soccer/>}/>
        <Route path='/checkbet' element={<CheckBet />} />
        <Route path='/modal' element={<Modal/>} />
        <Route path='/:id' element={<Prevmatch/>} />
        
        </Routes>
    </BrowserRouter>
  )
}

export default App;