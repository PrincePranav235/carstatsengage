import React from 'react'
import Footer from "./Footer";
export default function Cards() {
  return (
      <>
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
       {/* <><img src="..." className= "d-block mx-auto" data-target="#carousel-main" data-slide-to="2"></> */}
       <img src="PAGE1.png" className="d-block mx-auto w-100" alt="..." data-slide-to="2"/> 
    </div>
    <div className="carousel-item">
      <img src="page2.png" className="d-block w-100" alt="..."/> 
    </div>
    <div className="carousel-item">
      <img src="pagee3.png" className="d-block w-100" alt="..."/> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    {/*insertion of cards */}

    
  
  <div className="card">
  <div className="card-body">
    <h1 className="da"><strong><i>DASHBOARD THAT DRIVES PERFORMANCE</i></strong></h1>
  </div>
</div>
<div className="card" id='card'>
  <div className="card-body my-3 mx-5">
   <p>This website contains the dashboard which has been created by analysing the dataset provided by Microsoft Engage Team. The analysis of the dataset is done with the help of python libraries like pandas, NumPy, Matplotlib and Seaborn. The analysis data cleaning, data visualization and analysis is done.The report is made with the help of Microsoft Power BI which provides dynamic visualization effects which helps in better understanding of analysed data. The dashboard prepared after analysis is embedded below.</p>
  </div>
</div>


             <div className="videoWrapper my-5 mx-5">
      
        <iframe title="dash" src="https://app.powerbi.com/view?r=eyJrIjoiODQzZGUyOGMtYWQ0Zi00OTg4LTk2YjYtZTM0NjUwNTA1OGVmIiwidCI6ImFmM2E5ZjRiLTg0YzUtNGFkZS04ZjJkLThiZDEwZjljNjRiMyJ9" allowFullScreen></iframe>
      </div>

          

         

    
   
        <Footer/>
    </>
  )
}
