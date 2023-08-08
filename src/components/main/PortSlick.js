import React,{useEffect} from 'react'
import './main.css'
import Slider from "react-slick";
import bgimage from '../images/bgimage.jpg'
import { Link } from 'react-router-dom';
export default function PortSlick(props) {
  const settings = {
    dots: true,
    infinite:true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll:1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
              
        }
      }
    ]
  };
  
    return (
      <div className='container bg'> 
      <h2 className='textdata'>MY-PROJECTS </h2>
      <Slider {...settings}>
        <div className=''>
               <div className="card">
                    <img src={bgimage} className="card-img-top" alt="bgimage" style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">TEXT_COUNTER</h5>
                      <p className="card-text">MY REACT PROJECT,USING FUNCTION-BASE-COMPONENTS REACT BIGNNER PROJECT</p>
                      <Link to="https://mrabubakartextcounter.netlify.app/" className="btn text-danger">TEXT_COUNTER</Link>
                    </div>
                  </div>
        </div>
        <div className=''>
                  <div className="card" >
                  <img src={bgimage} className="card-img-top" alt="bgimage"  style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">CALCULATER</h5>
                      <p className="card-text">my shot project,animated calculater.
                        HTML,CSS,JAVASCRIPT, bignner project</p>
                      <Link to="https://mycalculater007.netlify.app/" className="btn text-danger">CALCULATER</Link>
                    </div>
                  </div>
        </div>
        <div className='' >
                <div className="card" >
                    <img src={bgimage} className="card-img-top" alt="bgimage"  style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">FOOD_HOUSE</h5>
                      <p className="card-text">full_stack project,HTML5,CSS,BOOTSTRAP,
                        JAVASCRIPT,PHP,MYSQL</p>
                      <Link to="http://localhost/foodhouse/home.php" className="btn text-danger">FOOD_HOUSE</Link>
                    </div>
                  </div>
        </div>
        <div className=''>
                  <div className="card" >
                  <img src={bgimage} className="card-img-top" alt="bgimage"  style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">SHOPPING MALL</h5>
                      <p className="card-text">full_stack project,HTML5,CSS,BOOTSTRAP,
                        JAVASCRIPT,PHP,MYSQL</p>
                      <Link to="http://localhost/shoppingmall/mane.php" className="btn text-danger">SHOPPING MALL</Link>
                    </div>
                  </div>
        </div>
        <div className=''>
                 <div className="card" >
                 <img src={bgimage} className="card-img-top" alt="bgimage"  style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">News Headlines</h5>
                      <p className="card-text"> MY REACT API APP, FUNCTION-BASE-COMPONENTS,FULL_STACK APP</p>
                      <Link to="https://github.com/MrAbubakarjutt007/my-Newsapp-function-base-component" className="btn text-danger">News Headlines</Link>
                    </div>
                  </div>
        </div>
      </Slider>    
    </div>
        
      );
}
