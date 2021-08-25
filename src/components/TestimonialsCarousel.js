import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import avatar1 from "../images/avatars/avatar-1.png"
import avatar2 from "../images/avatars/avatar-2.png"
import avatar3 from "../images/avatars/avatar-3.png"
import avatar4 from "../images/avatars/avatar-4.png"


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
      stopOnHover={true}
      transitionTime={800}
    >
      <div>
        <img src={avatar1} alt="Generic avatar 1" />
        <div className="myCarousel">
          <h3>[Name of person 1]</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam commodi blanditiis molestias eius quae praesentium laudantium nostrum expedita doloremque rem!</p>
        </div>
      </div>
      <div>
        <img src={avatar2} alt="Generic avatar 2" />
        <div className="myCarousel">
          <h3>[Name of person 2]</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam commodi blanditiis molestias eius quae praesentium laudantium nostrum expedita doloremque rem!</p>
        </div>
      </div>
      <div>
        <img src={avatar3} alt="Generic avatar 3" />
        <div className="myCarousel">
          <h3>[Name of person 3]</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam commodi blanditiis molestias eius quae praesentium laudantium nostrum expedita doloremque rem!</p>
        </div>
      </div>
      <div>
        <img src={avatar4} alt="Generic avatar 4" />
        <div className="myCarousel">
          <h3>[Name of person 4]</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam commodi blanditiis molestias eius quae praesentium laudantium nostrum expedita doloremque rem!</p>
        </div>
      </div>
    </Carousel>
  )
}

export default TestimonialsCarousel
