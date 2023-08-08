import React from 'react'
import './nev.css'
import { Link } from 'react-router-dom'
export default function PortNav(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <h5 className="navbar-brand"  id='textcolor'>MY_ PORTFOLIO</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nevlinks" aria-controls="nevlinks" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="nevlinks">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='textcenter'>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" id='textinfo'>HOME.INFO </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="information" id='textcolor'>SKILLS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projectinfo" id='textcolor'>PROJECTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" id='textcolor'>CONTECT US</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.togalMode} id="swtchdata"/>
        <label className="form-check-label" htmlFor="swtchdata"><marquee>BLACK MODE</marquee> </label>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.togalDark} id="swtchdata"/>
        <label className="form-check-label" htmlFor="swtchdata"><marquee>DARK MODE</marquee> </label>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}
