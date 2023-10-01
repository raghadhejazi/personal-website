import React from 'react'
import me from "../Home/images/WhatsApp Image 2023-07-08 at 9.48.00 PM.jpeg";
import linktree from "./link.png";
import facebook from "./facebook-app-symbol (1).png";
import instagram from "./instagram (1).png";
import linkedin from "./linkedin.png";

function About() {
    return (
        <section className='about ' id='About'>
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h3>About Me</h3>
                        <p className='pb-3'>Full Stack Web Developer <br />

                            <span className='span1'>A skilled and creative web developer looking for an exciting opportunity to utilize technical proficiency and innovative thinking in developing cutting edge web solutions that prioritize user experiences.</span>
                            <span className='span2'> My goal has always been to produce websites that look beautiful and professional, are responsive, load fast, and are search engine optimized.</span>

                        </p>


                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="about-item">
                            <div className='me'>
                                <img src={me} alt="" />
                            </div>

                            <div className='d-flex link'>
                                <a href="https://mostaql.com/u/raghady_hejazi" target="_blank"><img src={linktree} alt="" /></a>
                                <a href="https://www.facebook.com/profile.php?id=100094676043434" target="_blank" ><img src={facebook} alt="" /></a>
                                <a href="https://www.instagram.com/raghad.hejazi1/" target="_blank"><img src={instagram} alt="" /></a>
                                <a href="https://www.linkedin.com/in/raghad-hejazi-315653282/" target="_blank"><img src={linkedin} alt="" /></a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About