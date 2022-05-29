import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col col-md-2">
            <div className='box my-3' >

       <img src='logio-removebg-preview.png' alt='light' style={{height:'40px',width:'40px'}} ></img>

        <div className='content mx-2'>carStats</div>
        <br/>
        <h4>Microsoft</h4>
        <ul className="list-unstyled">
              <li>ENGAGE</li>
              <li>PROJECT</li>
              <li>DATA ANALYSIS</li>
            </ul>

       </div>
            
          </div>
          
          {/* Column2 */}
          <div className="col">
            {/* <h4>MICROSOFT</h4>
            <ui className="list-unstyled">
              <li>ENGAGE</li>
              <li>PROJECT</li>
              <li>DATA ANALYSIS</li>
            </ui> */}
          </div>
          {/* Column3 */}
          <div className="col-md-5 mb-md-0 mb-3">

      <h4>Contacts</h4>

       <div className='box1 my-3' >

       <img src='email.png' alt='light' style={{height:'30px',width:'30px'}} ></img>

        <div className='content1 mx-2' >princep.ug20.cse@nitp.ac.in  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>

       </div>

       <div className='box1 my-3' >

       <img src='GitHub-Mark-Light-32px.png' alt='light' style={{height:'40px',width:'40px'}} ></img>

        <div className='content1 mx-2'>PrincePranav235 &nbsp; &nbsp;</div>

       </div>



      <div className='box1 my-3' >

         <img src='icon.png' alt='light'  style={{height:'40px',width:'40px'}} ></img>

              <div className='content1 mx-2' >National Institute of Technology,Patna <section className="mx-5"><strong>Bihar, India</strong></section></div>

       </div>



      </div>
          <div className="col col-md-2 mx-2">
            
            <img src="logio-removebg-preview.png" alt="" />
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} <strong>carStats</strong> | All Rights Reserved 
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;