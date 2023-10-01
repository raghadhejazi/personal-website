import React from 'react'

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body" >
      <div className="container">
        <a className="navbar-brand" href="#">Zero To Hero</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link pe-4 active " aria-current="page" href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-4 active" aria-current="page" href="#About">About </a>
            </li>

            <li className="nav-item">
              <a className="nav-link pe-4 active" aria-current="page" href="#Services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link pe-4 active" aria-current="page" href="#Experiences">Experiences</a>
            </li>

            <li className="nav-item">

              <a className="nav-link pe-4 active" aria-current="page" href="#Portfolio">Portfolio</a>
            </li>


            <li className="nav-item">

              <a className="nav-link pe-4 active" aria-current="page" href="#ViewerOpinions">Viewer Opinions</a>
            </li>

            <li className="nav-item">

              <a className="nav-link pe-4 active" aria-current="page" href="#Contact">Contact</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar