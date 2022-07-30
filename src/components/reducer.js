import { match } from '../api'


export const reducer = (state, action) => {
  if (action.type === 'ADDTOCOUPON') {
  
    let selected = state.betItem.find(select => select.id === action.payload  )
    let allMatch = match.find(select =>  select.id === action.payload)
    
  if (selected) {
    return { ...state ,message:'already played',modal:true,type:'error',};
  }
  else
    return { ...state, betItem:  [...state.betItem, { ...allMatch }],message:'placed to bet',modal:true,type:'added',}
  }
  
  if (action.type === 'DRAWCOUPON') {
  
    let selectedDraw = state.drawItem.find(select => select.id === action.payload  )
    let allMatchDraw = match.find(select =>  select.id === action.payload)
  if (selectedDraw) {
    return { ...state ,message:'already played',modal:true,type:'error',};
  }
  else
    return { ...state, drawItem:  [...state.drawItem, { ...allMatchDraw, }],message:'placed to bet',modal:true,type:'added',}
    }
  if (action.type === 'AWAYCOUPON') {
  
    let selectedDraw = state.awayItem.find(select => select.id === action.payload  )
    let allMatchaway = match.find(select =>  select.id === action.payload)
  if (selectedDraw) {
    return { ...state ,message:'already played',modal:true,type:'error',};
  }
  else
    return { ...state, awayItem:  [...state.awayItem, { ...allMatchaway, }],message:'placed to bet',modal:true,type:'added',}
    }
    
    if (action.type==='CLOSE') {
        return{...state,modal:false,message:'',type:''}
    }
    if (action.type==='POPUP') {
      return{...state,popup:true}
    }
    if (action.type==='POPOUT') {
      return{...state,popup:false}
    }
  if (action.type === 'REMOVE') {
      const removing=state.betItem.filter(league=>league.id !==action.payload)
      return{...state,betItem:removing}
    }
   if (action.type === 'REMOVEDRAW') {
      const removingDraw=state.drawItem.filter(league=>league.id !==action.payload)
      return{...state,drawItem:removingDraw}
    }
   if (action.type === 'REMOVEAWAY') {
      const removingaway=state.awayItem.filter(league=>league.id !==action.payload)
      return{...state,awayItem:removingaway}
    }

    throw new Error ('no matching action')
  }
