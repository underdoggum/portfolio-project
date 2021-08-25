import React from "react"

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5"> {/*bootstrap classes with margin-y = 3rem*/}
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>2014-2015</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil cupiditate praesentium enim vitae, reiciendis maiores accusamus assumenda labore culpa amet libero vero neque expedita molestiae! Ipsa eius maiores asperiores, sequi rerum ab tempore beatae laudantium, fugit, iusto veritatis similique.</p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>2015-2016</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil cupiditate praesentium enim vitae, reiciendis maiores accusamus assumenda labore culpa amet libero vero neque expedita molestiae! Ipsa eius maiores asperiores, sequi rerum ab tempore beatae laudantium, fugit, iusto veritatis similique.</p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>2016-2017</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil cupiditate praesentium enim vitae, reiciendis maiores accusamus assumenda labore culpa amet libero vero neque expedita molestiae! Ipsa eius maiores asperiores, sequi rerum ab tempore beatae laudantium, fugit, iusto veritatis similique.</p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>2018-Current</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil cupiditate praesentium enim vitae, reiciendis maiores accusamus assumenda labore culpa amet libero vero neque expedita molestiae! Ipsa eius maiores asperiores, sequi rerum ab tempore beatae laudantium, fugit, iusto veritatis similique.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
