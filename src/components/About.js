import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function About() {
  return (
    <>
    <div>
      <nav id="navbar-example2" className= "navbar sticky-top bg-light px-3 mx-5 ">
  <HashLink className= "navbar-brand mx-3" to= "#"><strong>FEATURES</strong></HashLink>
  <ul className= "nav nav-pills">
    <li className= "nav-item">
      <HashLink className= "nav-link mx-3" to= "#scrollspyHeading1"><strong>ABS(Anti Braking System)</strong></HashLink>
    </li>
    <li className= "nav-item">
      <HashLink className= "nav-link mx-3" to= "#scrollspyHeading2"><strong>Torque</strong></HashLink>
    </li>
    <li className= "nav-item dropdown ">
      <HashLink className= "nav-link dropdown-toggle" data-bs-toggle="dropdown" to= "#" role="button" aria-expanded="false"><strong>Power</strong></HashLink>
      <ul className= "dropdown-menu">
        <li><HashLink className= "dropdown-item" to= "#scrollspyHeading4"><strong>Mileage</strong></HashLink></li>
        <li><HashLink className= "dropdown-item" to= "#scrollspyHeading5"><strong>Airbags</strong></HashLink></li>
        <li><hr className= "dropdown-divider"/></li> 
        <li><HashLink className= "dropdown-item" to= "#scrollspyHeading6"><strong>EBD</strong></HashLink></li>
        <li><HashLink className= "dropdown-item" to= "#scrollspyHeading7"><strong>Ventilation</strong></HashLink></li>
        
      </ul>
    </li>
  </ul>

</nav>
</div>

<div  className='mx-5'>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className= "scrollspy-example" tabIndex="0">
  <h4 id="scrollspyHeading1"><strong>ABS(Anti Braking System)</strong></h4>
  <p><img src="abdc.png" style={{width:'90%'}} alt="" /></p>
  <h4 id="scrollspyHeading2"><strong>Torque</strong></h4>
  <p><img src="torq.png" style={{width:'90%'}} alt="" /></p>
  <h4 id="scrollspyHeading3"><strong>Power</strong></h4>
  <p><img src="power.png" style={{width:'90%'}} alt="" /></p>
  <h4 id="scrollspyHeading4"><strong>Mileage</strong></h4>
  <p><img src="mileage (2).png" style={{width:'90%'}} alt="" /></p>
  <h4 id="scrollspyHeading5"><strong>Airbags</strong></h4>
  <p><img src="arbgs.png" style={{width:'90%'}} alt="" /></p>
  <h4 id="scrollspyHeading6"><strong>EBD(Electronic Force Distribution)</strong></h4>
  <p><img src="ebd.png" style={{width:'90%'}} alt="" /></p>
  <h4 id="scrollspyHeading7"><strong>Ventilation System</strong></h4>
  <p><img src="VENTILATION.png" style={{width:'90%'}} alt="" /></p>
</div>
</div>
    </>
  )
}
