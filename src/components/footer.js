import React from 'react';
import {FaFacebook,FaWhatsapp,FaLinkedin,FaVoicemail} from 'react-icons/fa'

const Footer = () => {
  return (
    <main className='footer'>
      <div className="footer-info">
      <div>
<button>privacy and policy</button>
<button>settings</button>
<button>faq</button>
      </div>
      <div>
<button>about us</button>
<button>terms and services</button>
<button>feed us back</button>
      </div>
      <div>
        
<button>contact us</button>
<button>visit us</button>
<button>what we offer</button>
      </div>
      </div>
      <div className="social">
        <a href="#"><FaFacebook/></a>
        <a href="#"><FaWhatsapp/></a>
        <a href="#"><FaLinkedin/></a>
        <a href="#"><FaVoicemail/></a>
      
      </div>
      <h4>&copy; nelsonLite</h4>
    </main>
  );
}

export default Footer;
