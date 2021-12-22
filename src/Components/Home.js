import React from 'react'
import '../App.css'
import {Carousel} from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Carousel variant="dark">
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>API Checkpoint</h3>
      <p>In this checkpoint,we are going to consume an API that provides us with list of users.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    )
}

export default Home
