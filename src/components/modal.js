import React from 'react';
import { useFetch } from './globalContext';
import{FaThumbsUp,FaTimes}from 'react-icons/fa'

const Modal = () => {
    const{popup,Closepop}=useFetch()
    return (
      <>
      <div className={`${popup ? 'modal show-modal' : 'modal' }`} >
                <div className='modal-cont'>
                    <div className='center'>
                        <div className='pop-btn'>
                        <button onClick={Closepop}><FaTimes className='timeslogo'/></button></div>

                        </div>
                <h4 className='modal-text'>your bet has been succesfully booked</h4>
                <div><FaThumbsUp className='thumb-icon'/></div>
                </div>
          
    </div>
      </>
  );
}

export default Modal;
