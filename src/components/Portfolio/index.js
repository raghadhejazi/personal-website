import React from 'react'
import Appco from "./mokup/Appco.png";
import Appie from "./mokup/Appie.png";
import Axolot from "./mokup/Axolot.png";
import Clion from "./mokup/Clion.png";
import Lenoves from "./mokup/Lenoves.png";
import Para from "./mokup/Para.png";
import SquareX from "./mokup/SquareX.png";
import Tours from "./mokup/Tours.png";





function Portfolio() {
    return (
        <section className='protfolio text-center' id='Portfolio'>
            <div className="container">
                <h3>Protfolio</h3>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={Appco} className="card-img-top" alt="..." />

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={Appie} className="card-img-top" alt="..." />

                        </div>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={Axolot} className="card-img-top" alt="..." />

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={Clion} className="card-img-top" alt="..." />

                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={Tours} className="card-img-top" alt="..." />

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={Para} className="card-img-top" alt="..." />

                        </div>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={SquareX} className="card-img-top" alt="..." />

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card" >
                            <img src={Lenoves} className="card-img-top" alt="..." />

                        </div>
                    </div>

                </div>
            </div>



        </section>
    )
}

export default Portfolio