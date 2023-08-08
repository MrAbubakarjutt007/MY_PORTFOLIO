import React from 'react'
import './portfooter.css';
import pngegg from '../images/pngegg.png';
import { Link } from 'react-router-dom';
export default function PortFooter(props) {
  return (
    <div className='container-fluid imgdata'>
       
               <div className='itemgit'>
                 <Link to="https://github.com/MrAbubakarjutt007?tab=repositories" className="btn"> <img src={pngegg} alt={pngegg} id='autodata'/></Link>
                 <h3><strong className='dark'>abubakarjuttabubakar553@gmail.com,</strong></h3>
                 <span className='dark'>MrAbubakarjutt007</span>
               </div>
          
    </div>
  )
}
