import React, { useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { villages } from '../api';
import NavBar from './navbar';
import moment from 'moment'
import Footer from './footer';
const Prevmatch = () => {
    const [prev, setprev] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const mainPrev = villages.find(user => user.id === parseInt(id))
        setprev([...prev, mainPrev])
    }, []);
    return (
    <>
            <NavBar />
            
            <div>
                {prev.map((older) => {
                    const { id, name, prev_matches } = older
                    return (
                        <div key={id}>
                            <h3>last match statistics</h3>

                            {prev_matches.map((main,index) => {
                                const { prev_match, date, score } = main
                                return (
                                    <ul className='prevmatch' key={index}>

                                        <li>{prev_match}</li>
                                        <li>{score}</li>
                                        <li>{moment(date).format('dddd MM YYYY') }</li>
                                    </ul>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <Footer/>
    </>
  );
}

export default Prevmatch;
