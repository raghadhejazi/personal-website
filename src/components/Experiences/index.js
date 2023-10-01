import React from 'react'
import video from "./video/video.mp4";
function Experiences() {
  return (
    <header className="experiences mb-5 text-center" id='Experiences'>

      <h3>Experiences</h3>
      <video controls>
        <source src={video} type='' />
      </video>

    </header>
  )
}

export default Experiences
