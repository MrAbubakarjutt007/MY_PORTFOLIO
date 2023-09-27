import React from 'react'
import './Contectstyle.css'


export default function ContectUs(props) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>CONTACT WITH<span className='chanimations'> ME</span></h1>
                        <form className='my-5'>
                            <div className="mb-3" id='divsize'>
                                <label htmlFor="Username" className="form-label" id="colordata">Name</label>
                                <input type="text" className="form-control" id="example" placeholder="NAME" />
                            </div>
                            <div className="mb-3" id='divsize'>
                                <label htmlFor="EnterEmail" className="form-label" id="colordata">Email address</label>
                                <input type="email" className="form-control" id="exampleForm" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3" id='divsize'>
                                <label htmlFor="Message" className="form-label" id="colordata">MESSAGE</label>
                                <textarea className="form-control" id="exampleFormControl" rows="5" placeholder="MESSAGE"></textarea>
                            </div>
                            <button type="submit" className="btn" id='contectbtn'>SEND_INPUT</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <div className='d-flex'>

                            <a href="#" className='btn btn-success' download="">DOWNLOAD_CV <i className="fa-solid fa-download"></i></a>

                            <a href="#" className='btn btn-success mx-3'  download=" " >DOWNLOAD_NOTES <i className="fa-solid fa-download"></i></a>

                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}
