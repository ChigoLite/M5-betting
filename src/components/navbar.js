import React from 'react';
import { useFetch } from './globalContext';
import Message from './message';
import { Link } from 'react-router-dom';
import { FaShoppingCart ,FaArrowLeft} from 'react-icons/fa'

const NavBar = () => {
const {modal,message,type,betItem,drawItem,awayItem} = useFetch()
  return (
  <>
      <div className="nav">
        <main className='nav-info'>
           <div className='back'>
          <Link to='/'><FaArrowLeft className={ 'back-icon'  } /></Link>

        </div>
              <div className="logo">
                  <img className='img' src="logo.jpg" alt="logo" />
          </div>
          <div className="content">
            <h4>M5-for the unity of mgbowo l'ese.</h4>
<br />
                <p>Reward your passion base on your prediction.</p>
          </div>
          <div className='login-btn'>
        <Link  to='/checkbet'><FaShoppingCart className='btn-icon'/></Link>
            <div className={`${betItem.length + drawItem.length +awayItem.length <=0 ? 'badge' : 'badge badge-show' }`}>
              {betItem.length + drawItem.length + awayItem.length}
</div>
          </div>
        </main>
            <div>{modal && <Message message={message } type={type} /> }</div>
      </div>
  </>
          
    
  );
}

export default NavBar;
