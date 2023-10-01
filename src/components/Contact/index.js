import React from 'react'
import linktree from "./link/link (1).png";
import facebook from "./link/facebook-app-symbol (2).png";
import instagram from "./link/instagram (2).png";
import linkedin from "./link/linkedin (1).png";


function Contact() {
    return (
        <section className='contact' id='Contact'>

            <div className="container">
                <div className="row">
                    <div className="colsm-12 col-md-6 col-lg-6">
                        <h3>Contact Me</h3>
                        <p>Thank you for visiting my personal website ,  do not <br />
                            forget to leave a nice comment</p>

                        <input type="text" placeholder='Enter your nice comment' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className=' link'>
                            <div className='d-flex'>
                                <a href="https://mostaql.com/u/raghady_hejazi" target="_blank"><img src={linktree} alt="" /></a>
                                <h2>Mostaql</h2>
                            </div>

                            <div className='d-flex'>
                                <a href="https://www.facebook.com/profile.php?id=100094676043434" target="_blank" ><img src={facebook} alt="" /></a>
                                <h2>facebook</h2>
                            </div>

                            <div className='d-flex'>
                                <a href="https://www.instagram.com/raghad.hejazi1/" target="_blank"><img src={instagram} alt="" /></a>
                                <h2>Instagram</h2>
                            </div>

                            <div className='d-flex'>
                                <a href="https://www.linkedin.com/in/raghad-hejazi-315653282/" target="_blank"><img src={linkedin} alt="" /></a>
                                <h2>Linkdin</h2>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='footer text-center'>
        <hr/>
        <p>© Zero To Hero By Developer: Raghad Hejazi</p>
    </div>

        </section>
    )
}

export default Contact