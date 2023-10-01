import React from 'react'
import img1 from "./viewers/SharedScreenshot.jpg";
import img2 from "./viewers/SharedScreenshot1.jpg";
import img3 from "./viewers/SharedScreenshot2.jpg";
import img4 from "./viewers/3.jpg";
import img5 from "./viewers/5.jpg";
import img6 from "./viewers/6.jpg";
import img7 from "./viewers/7.jpg";
import img8 from "./viewers/8.jpg";
import img9 from "./viewers/9.jpg";
import img10 from "./viewers/10.jpg";
import img11 from "./viewers/11.jpg";
import img12 from "./viewers/12.jpg";

function ViewerOpinions() {
  return (
    <section className='viewer-opinions text-center' id='ViewerOpinions'>
      <div className="container">
        <h3>Viewer Opinions</h3>


        <div className="viewer-opinions-item">

          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">

                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={img1} className="d-block w-70 " alt="..." />
                    <img src={img2} className="d-block w-70 img" alt="..." />
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={img3} className="d-block w-70 " alt="..." />
                    <img src={img4} className="d-block w-70 img" alt="..." />

                  </div>
                </div>




              </div>


              <div className="carousel-item active">

                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={img5} className="d-block w-70 " alt="..." />
                    <img src={img6} className="d-block w-70 img" alt="..." />
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={img7} className="d-block w-70 " alt="..." />
                    <img src={img8} className="d-block w-70 img" alt="..." />

                  </div>
                </div>




              </div>

              <div className="carousel-item active">

                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={img9} className="d-block w-70 " alt="..." />
                    <img src={img10} className="d-block w-70 img" alt="..." />
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={img11} className="d-block w-70 " alt="..." />
                    <img src={img12} className="d-block w-70 img" alt="..." />

                  </div>
                </div>




              </div>





            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


        </div>



      </div>
    </section>
  )
}

export default ViewerOpinions