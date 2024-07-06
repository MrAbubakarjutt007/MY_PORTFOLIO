import React,{useEffect}  from 'react'
import './mainsecand.css'
import abubakarjutt from '../images/abubakarjutt.png'
import imojes from '../images/imojes.png'
import glassesimg from '../images/glassesimg.png'
import PortSlick from '../main/PortSlick'
import PortFooter from '../footer/PortFooter'
export default function PortUserinfo(props){
 useEffect(()=>
{
 props.setProgress(100);
});
  return (
   <>
    <div className='container d-flex'>
      <div className="row"> 
      <div className="col-lg-6 col-md-6 col-12"> 
          <div className="item1">
            <div className="text d-flex">
               <div className='namedata'> 
                 <h5 style={{color:props.mode==='dark'?'white':'black'}}>{props.name}<i className="fa-solid fa-user mx-2"></i></h5>
              </div>
              <span className='imoje'><img className='mx-5' src={imojes} alt="imojes" width={100}/></span> 
            </div>
            <div>
            <img className='userimg' src={abubakarjutt} alt="abubakarjutt" width={400}/>
            </div>
            <div className="skill d-flex" style={{color:props.mode==='dark'?'white':'black'}}>
               <h5>{props.info}</h5>
               <i className="fa-brands fa-connectdevelop"></i>
            </div>  
        </div>
        </div>
         <div className="col-lg-6 col-md-6 col-12"> 
        <div className="item2">
            <div className="data">
              <h1 className="data1"  style={{color:props.mode==='dark'?'white':'#8941d9'}}>Hi; I Am</h1>
              <span><h1 className="data2">ABUBAKAR ABDUL-GHAFFAR-PASHA</h1></span>
              <p className='changetext' style={{color:props.mode==='dark'?'white':'black'}}>
              I am a full stack Web Developer,
              Graphic designer,Video Editor and Influencer.
              I think that "Everything has a solution,
              only if you're trying with patience and 
                  hard effort !!"
                  
              </p>
                <a className="btn" id='contactus' href="/ContectMe">CONTACT-US</a>
                  <div><img className='animate' src={glassesimg} alt="glassesimg" width={200}/>
                </div>
            </div>
         </div> 
         </div>
         </div> 
    </div>

     <PortSlick/>
     <br />
     <PortFooter/>

    </>
  )
}
PortUserinfo.defaultProps=
{
   name :"MR.ABUBAKAR",
   info: "WEB_DEVELPER"
}
