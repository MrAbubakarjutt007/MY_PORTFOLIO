import React,{useEffect} from 'react'
import './main.css'
import Slider from "react-slick";
import calculatevalue from '../images/calculatevalue.jpg'
import homeimagedata from '../images/homeimagedata.png'
import textcounterimg from '../images/textcounterimg.jpg'
import latestnews from '../images/latestnews.jpg'
import chikenlogo from '../images/chikenlogo.jpg'
import shoppingslider4 from '../images/shoppingslider4.jpg'
import bannershorizontal from '../images/bannershorizontal.png'
import weatherapp from '../images/weatherapp.png'
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
                    <img src={textcounterimg} className="card-img-top" alt={textcounterimg} style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">TEXT_COUNTER</h5>
                      <p className="card-text">MY REACT PROJECT,USING FUNCTION-BASE-COMPONENTS REACT BIGNNER PROJECT</p>
                      <Link to="https://mrabubakartextcounter.netlify.app/" className="btn text-danger">TEXT_COUNTER</Link>
                    </div>
                  </div>
        </div>
        <div className=''>
                  <div className="card" >
                  <img src={calculatevalue} className="card-img-top" alt={calculatevalue}  style={{borderRadius:'50px',height:'160px'} }/>
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
                    <img src={chikenlogo} className="card-img-top" alt={chikenlogo}  style={{borderRadius:'50px'} } id='imagechange'/>
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
                  <img src={shoppingslider4} className="card-img-top" alt={shoppingslider4}  style={{borderRadius:'50px'}}  id='imagedatain'/>
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
                 <img src={latestnews} className="card-img-top" alt={latestnews}  style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">News Headlines</h5>
                      <p className="card-text"> MY REACT API APP, FUNCTION-BASE-COMPONENTS,FULL_STACK APP</p>
                      <Link to="https://github.com/MrAbubakarjutt007/my-Newsapp-function-base-component" className="btn text-danger">News Headlines</Link>
                    </div>
                  </div>
        </div>
        <div className=''>
                 <div className="card" >
                 <img src={bannershorizontal} className="card-img-top" alt={bannershorizontal} style={{borderRadius:'50px'} }/>
                    <div className="card-body">
                      <h5 className="card-title">BORJAN DAMO</h5>
                      <p className="card-text">MY FRONTEND PROJECT WITH HTML AND CSS,BORJAN WITH MY CODE</p>
                      <Link to="https://mrabubakarjuttborjanshouse.netlify.app/" className="btn text-danger">BORJAN</Link>
                    </div>
                  </div>
        </div>
        <div className=''>
                 <div className="card" >
                 <img src={homeimagedata} className="card-img-top" alt={homeimagedata} width={100}  style={{borderRadius:'50px',height:'187px'}}/>
                    <div className="card-body">
                      <h5 className="card-title">G/S_PORTFOLIO</h5>
                      <p className="card-text">React,TAILWIND,BOOTSTRAP5, PROJECT WITH GOLD</p>
                      <Link to="https://mrabubakarjuttgoldenportfolio.netlify.app/" className="btn text-danger">G/S_PORTFOLIO</Link>
                    </div>
                  </div>
        </div>
        <div className=''>
                 <div className="card" >
                 <img src={weatherapp} className="card-img-top" alt={weatherapp} width={100}  style={{borderRadius:'50px',height:'187px'}}/>
                    <div className="card-body">
                      <h5 className="card-title">WEATHER_APP</h5>
                      <p className="card-text">React,OPENWEATHER_API PROJECT WITH GOLD</p>
                      <Link to="https://mrabubakarjuttweatherapp.netlify.app/" className="btn text-danger">WEATHER_APP</Link>
                    </div>
                  </div>
        </div>
      </Slider>    
    </div>
        
      );
}
