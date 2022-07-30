
import React,{useContext,useEffect,useReducer,useState} from 'react';
import {villages} from '../api'
import { match } from '../api'
import{reducer} from './reducer'
const Gcontext = React.createContext()

 
const initialState = {
  betItem: [],
  drawItem: [],
  awayItem:[],
  teams: villages,
  modal: false,
  message: '',
  type: '',
popup:false,
  
    
}

const GlobalContext = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const checkcoupon = (id,) => {
    dispatch({ type: 'ADDTOCOUPON', payload: id })
    
  
  }
  
  const drawcoupon = (id,) => {
    dispatch({ type: 'DRAWCOUPON', payload: id })
    
  
  }
  const awaycoupon = (id,) => {
    dispatch({ type: 'AWAYCOUPON', payload: id })
    
  
  }

  const close = () => {
    dispatch({type:'CLOSE'})
  }
  const Pop = () => {
    dispatch({type:'POPUP'})
  }
  const Closepop = () => {
    dispatch({type:'POPOUT'})
  }
  const remove = (id) => {
    dispatch({type: 'REMOVE',payload:id})
  }
  const removeDraw = (id) => {
    dispatch({type: 'REMOVEDRAW',payload:id})
  }
  const removeaway = (id) => {
    dispatch({type: 'REMOVEAWAY',payload:id})
  }
  const others = () => {
    alert('STILL WORKING THE CURRENT PAGE.')
  }
 
  return (
    <Gcontext.Provider value={{...state,checkcoupon,match,close,Pop,Closepop,remove,drawcoupon,removeDraw,awaycoupon,removeaway,others}}>
      {children}
    </Gcontext.Provider>
  );
}

export const useFetch = () => {
    return useContext(Gcontext)
}
export default GlobalContext;
