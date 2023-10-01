import React from 'react'
import me from "./images/WhatsApp Image 2023-07-08 at 9.48.00 PM.jpeg";
function Herosection() {
  return (
 <section className='herosection' id='Home'>
      
    <div className="container">
 
        <div className="row">
           
            <div className="col-sm-12 col-md-12 col-lg-6 min1">
                <span>Hello , I'm </span>
                <h1>
                    Raghad Yousef  Hejazi
                </h1>

                <h3>
                    Full Stack Web Doveloper 
                    with Laravel and React.js
                </h3>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 min">
                <img src={me} alt="" />
            </div>
        </div>
        
    </div>
    <div className='o'></div>
     <div className='p'></div>
     <div className='c'></div>

     <div className='i'></div>
     <div className='t'></div>
     <div className='y'></div>



 </section>
  )
}

export default Herosection