import React,{useState, useEffect,useRef} from 'react';
import { useFetch } from './globalContext';
import NavBar from './navbar';
import {Link} from 'react-router-dom'
import { FaArrowCircleDown ,FaChartBar} from 'react-icons/fa'
import Prevmatch from './prevmatch';
import Footer from './footer';
let num=0
const Soccer = () => {
  const { checkcoupon, match,drawcoupon,awaycoupon,others} = useFetch()
  const [multipl, setMultipl] = useState(false);
 
  const multipleshow = (id) => {
    setMultipl(prev => !prev)
    const numbee={id}
    num=numbee
   
  }
  
return (
  <>
    <NavBar />
    <div className="wrap">
     
        <div className="beting">
               
                    {match.map((matches,index) => {
                      const { id, odd2, draw, odd1, fixedMatch } = matches
                  
                      return (
                        <div  key={id}>
                          <main className='match'>
                            {fixedMatch}

                          </main>
                          <div className="match-btn">
                            
                              <button onClick={()=>checkcoupon(id)} className={ 'btn'  } >{odd1 }</button>
                              <button onClick={()=>drawcoupon(id)} className='btn'>{draw }</button>
                            <button onClick={()=>awaycoupon(id)} className='btn' >{odd2}</button>
                            <button onClick={() => multipleshow(id)} className='btn-more' ><FaArrowCircleDown /></button>
                            <button  className='btn'>

                            <Link to={`/${id}`}><FaChartBar className='barlogo'/></Link>
                            </button>
                            <div className={`${multipl  &&id==num.id  ? 'multiple showmultiple' : 'multiple'}`}>

                   <button onClick={others} className='multiple-btn'>OVER 2.5 <br /> <span className='multi'>4</span> </button>
                   <button onClick={others} className='multiple-btn'>X <br /> <span className='multi'>5</span> </button>
                   <button  onClick={others}className='multiple-btn'>OVER 2.5 <br /> <span className='multi'>15</span> </button>
                   <button onClick={others} className='multiple-btn'>UNDER 2.5 <br /> <span className='multi'>3</span> </button>
                   <button onClick={others}  className='multiple-btn'>G/G <br /> <span className='multi'>2</span> </button>
                   <button onClick={others} className='multiple-btn'>UNDER 2.5 <br />  <span className='multi'>5</span> </button>
                   <button  onClick={others}className='multiple-btn'>1/x <br /> <span className='multi'>8</span> </button>
                   <button onClick={others} className='multiple-btn'>N/G <br /> <span className='multi'>5</span> </button>
                   <button  onClick={others}className='multiple-btn'>1/x <br /> <span className='multi'>2</span> </button>
                            </div>
                       </div>
                        
                </div>
                      )
})}
                 
                

<Footer/>
      </div>
    </div>
    
      </>
  
  );
}

export default Soccer;
