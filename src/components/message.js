import React, { useEffect } from 'react';
import { useFetch } from './globalContext';

const Message = ({message,type}) => {
    const { Message, close } = useFetch()
    useEffect(() => {
    const timer= setTimeout(() => {
        close()
        return ()=> clearTimeout(timer)
    }, 3000);
    }, []);
  return (
    <div>
          <p className={`mes-${type}`}>{message }</p>
    </div>
  );
}

export default Message;
