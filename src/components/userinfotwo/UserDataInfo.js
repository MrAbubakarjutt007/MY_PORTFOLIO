import React from 'react'
import './infotwo.css'
import mygitimg from '../images/mygitimg.png'
export default function UserDataInfo(props) {
  return (
    <>
      <div className="container  my-5">
        <div className="row"><div className="col-lg-6 col-md-6 col-12">
           <div className=''>
                 <h4 className='danger'>WORK ON BOTH PROGRAMING LANGUAGE <br /><span id='frontend'> FRONTEND & BACKEND</span></h4>
                <p className='danger'>I have worked with a range of technologies in the web development world. From back-end to front-end.</p>
                <h6 id='frontend'>FRONTEND DEVELPMONT</h6>
                <p className='danger'>HTML5,CSS,BOOTSTRAP5,REACT</p>
                <h6 id='frontend'>BACKEND DEVELPMONT</h6>
                <p className='danger'>PHP,PHP CRUD, C/C++ </p>
                <h6 id='frontend'>DATABASE MANEGMANT</h6>
                <p className='danger' >MYSQL DATABASE</p>
                <h6 id='frontend'>OTHERS</h6>
                <p className='danger'>WORDPRESS</p>
           </div>
           </div>
           <div className="col-lg-6 col-md-6 col-12">
           <div className="git mx-5 text-center">
              <h3 id='frontend'>DISTERBUTED VERYAN CONTROL SYSTEM</h3>
              <img src={mygitimg} alt={mygitimg} className='my-5' />
              <p className='danger'>Git is very important for online work.</p>
           </div>
           </div>
          </div>                    
      </div> 
    </>
  )
}
