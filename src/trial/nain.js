import React,{useState} from 'react';

const state = [
    {name:'chicago',id:1},
    {name:'mali',id:2},
    {name:'france',id:3}
]

let green = '#39D1B4';
 let yellow = '#FFD712'
const Trial = () => {
    const [origin, setOrigin] = useState(state);
  const [button, setButton] = useState(false);
  const [store, setStore] = useState([]);
 
  const main = store.map(iden => {
    return(iden.id)
  })
  console.log(main);
  return (
    <div>
      {origin.map(city => {
            const{id}=city
          return(
              <div key={id}>
              <button onClick={(e) => setStore(prev=>([...prev,{id}]))} className={`${id==main? 'btn btn-remove' : 'btn'}`}>{city.name }</button>
                  </div>
          )
      })}
    </div>
  );
}

export default Trial;
