import React,{useEffect} from 'react'
import './userlinks.css'
import glasses from '../images/glasses.png'
import humble from '../images/humble.png'
import mylinkin from '../images/mylinkin.png'
import mygitimg from '../images/mygitimg.png'
import { Link } from 'react-router-dom'

export default function PortUser(props) {
useEffect(()=>
{

 props.setProgress(100);

});

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12"> 
           <div className="">
              <h1 className='danger' style={{marginTop:'30px', marginLeft:'35px'}}>Skills<i className="fa-solid fa-user mx-2"></i></h1>
               <p className='danger mx-5' style={{fontSize:'17px',marginTop:'70px',fontFamily:'serif'}}>
                <strong style={{color:props.mode==='dark'?'white':'black'}}>
                            Full-stack Developer with experience in React,JavaScript,      
                            C/c++, HTML/CSS, React,WordPress,php,MySQL,Git and GitHub.           
                </strong>
                </p>
                <div className="icons text-center my-5">
                <Link to="https://github.com/MrAbubakarjutt007?tab=repositories" className="btn"> <img src={mylinkin}  alt={mylinkin} width={40}/></Link>
                <Link to="https://github.com/MrAbubakarjutt007?tab=repositories" className="btn"> <img src={mygitimg} alt={mygitimg} width={40}/></Link>
                </div>
                <div className='text-center danger'>
                  <h5 style={{color:props.mode==='dark'?'white':'black'}}>SOCIAL MEDIA LINKS<i className="fa-solid fa-link"></i></h5>
                  <span><a href="#" className="btn  fillcolor"><i className="fa-brands fa-instagram"  style={{fontSize:'25px'}}></i></a></span>
                  <span><a href="#" className="btn  fillcolor"><i className="fa-brands fa-whatsapp" style={{fontSize:'25px'}}></i></a></span>
                  <span><a href="#" className="btn  fillcolor"><i className="fa-brands fa-twitter" style={{fontSize:'25px'}}></i></a></span> 
                </div>
           </div>
           </div>
           <div className="col-lg-4 col-md-4 col-12"> 
           <div className="card" id='moves'>
                 <img src={glasses} className="my-3" alt="glasses" width={100} />
                    <div className="card-body">
                      <h5 className="card-title">BOOTSTRAP</h5>
                      <p className="card-text" style={{color:props.mode==='dark'?'white':'black'}}>EASSY WAY TO CREATE WEB SITE <span className=''>IF YOU HAVE BASIC NOLIGE</span></p>
                      
                      <Link to="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn text-danger"  style={{fontSize:'20px'}}>BOOTSTRAP<i className="fa-brands fa-bootstrap"></i></Link>
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                  <div className="card" id='movediv'>
                 <img src={humble} className="my-3" alt="humble" width={100} />
                    <div className="card-body">
                      <h5 className="card-title">REACT DEVELPOR</h5>
                      <p className="card-text" style={{color:props.mode==='dark'?'white':'black'}}>REACT-PROJECT WITH FUNCTION BASE COMPONENTS<span className=''></span></p>
                      
                      <Link to="https://legacy.reactjs.org/tutorial/tutorial.html" className="btn text-danger" style={{fontSize:'20px'}}>REACT<i className="fa-brands fa-react"></i></Link>
                    </div>
                  </div>
            </div>
            </div>                    
      </div>
    </>
  )
}
