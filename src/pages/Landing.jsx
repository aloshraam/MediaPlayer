import React from 'react'
import { Link } from 'react-router-dom'
import landingIMG from '../assets/landingIMG.gif'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.jpg'
import { Button, Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      <div className='row align-items-center'>
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius ex quod ratione impedit explicabo rem pariatur dolorum beatae. Et.</p>
            <Link className='btn btn-info' to={'/home'}>Get started</Link>
          </div>

          <div className="col"></div>
          <div className="col-lg-6">
            <img src={landingIMG} className='img-fluid ms-5' alt="" />
          </div>
      </div>
      {/* features */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          {/* Card-1 */}
          <div className='col-lg-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={feature1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
          {/* Card-2 */}
          <div className='col-lg-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={feature2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
          {/* Card-3 */}
          <div className='col-lg-4'>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{objectFit : 'cover', height : '12rem'}} variant="top" src={feature3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>

        </div>
      </div>
      {/* container  */}
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign : 'justify'}}><span className='fs-5 fw-bolder '>Lorem ipsum</span> : dolor sit, amet consectetur adipisicing elit. Itaque fugit doloribus nisi rerum tempora ducimus consequuntur quasi possimus esse vero!</p>

          <p style={{textAlign : 'justify'}}><span className='fs-5 fw-bolder '>Lorem ipsum</span> : dolor sit, amet consectetur adipisicing elit. Itaque fugit doloribus nisi rerum tempora ducimus consequuntur quasi possimus esse vero!</p>

          <p style={{textAlign : 'justify'}}><span className='fs-5 fw-bolder '>Lorem ipsum</span> : dolor sit, amet consectetur adipisicing elit. Itaque fugit doloribus nisi rerum tempora ducimus consequuntur quasi possimus esse vero!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe width="100%" height="450" src="https://www.youtube.com/embed/Yh5NDSKwJvw" title="Peter Cat Recording Co. - Where the Money Flows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing