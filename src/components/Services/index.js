import React from 'react'
import frontend from "./profession-frontenf-dev_ua.png";
import backend from "./backend-developer-Large.webp";
import Laravel from "./Laravel_9.0.png";
import react from "./63986927bbfd604be1df34d7_10-Modern-react-Tools-that-companies-use-in-production_Main-image.jpg";

function Services() {
  return (
    <section className='services text-center' id='Services'>
      <div className="container">
        <h3>Services</h3>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card" >
              <img src={frontend} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">FrontEnd-development</h5>

              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card" >
              <img src={backend} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">BackEnd-development</h5>

              </div>
            </div>
          </div>


          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card" >
              <img src={Laravel} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">framework ( Laravel )</h5>

              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card" >
              <img src={react} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">React.js</h5>

              </div>
            </div>
          </div>

        </div>
      </div>



    </section>
  )
}

export default Services