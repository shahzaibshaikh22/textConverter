import React from "react";
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{props.heading}</span>
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/about">Features</Link> */}
           <div className={`form-check form-switch text-${props.mode=== 'light'? 'dark' :'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggler}/>
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Mode</label>
          </div>
        </div>
      </nav>
    </div>
  );
}
