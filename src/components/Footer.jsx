import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height: '300px'}} className='container mt-5 w-100 '>
        <div className='d-flex justify-content-between'>

        {/* introduction */}
          <div style={{width: '400px'}}>
            <h5><i className="fa-solid fa-compact-disc"></i>
             Media Player</h5>
            <p>designed and build with all the love on the world by the luminar team with the help of our contributors.</p>
            <p>Code liscensed Luminar,Doc CC by 3.0.</p>
            <p>Currenky v5.3.2.</p>
          </div>
        {/* Links */}

          <div className='d-flex flex-column '>
            <h5>Links</h5>
            <Link style={{textDecoration:'none', color: 'white'}} to={'/'} >Landing Page</Link>
            <Link style={{textDecoration:'none', color: 'white'}} to={'/home'} >Home Page</Link>
            <Link style={{textDecoration:'none', color: 'white'}} to={'/history'} >History Page</Link>
          </div>

        {/* Guides */}
          <div className='d-flex flex-column '>
              <h5>Guides</h5>
              <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://react.dev/">React</a>
              <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
              <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://www.npmjs.com/package/react-router-dom">React router DOM</a>
          </div>

        {/* Contact */}
          <div className='d-flex flex-column'>
            <h5>Contact</h5>
            <div className='d-flex justify-content-between mt-3'>
                <input type="text" placeholder='Email...' className='form-control me-2'/>
                <button className='btn btn-info'> <i className="fa-solid fa-arrow-right "></i> </button>
            </div>
                <div className='d-flex justify-content-evenly mt-3'>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://x.com/?lang=en"> <i className="fa-brands fa-twitter"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://discord.com/"> <i className="fa-brands fa-discord"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://www.youtube.com/"> <i className="fa-brands fa-youtube"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://core.telegram.org/blackberry/login"> <i className="fa-brands fa-telegram"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href=""> <i className="fa-brands fa-soundcloud"></i> </a>
                </div>
          </div>

        </div>

        <div>
          <p className='text-center mt-3'>Copyright &copy; May 2024 batch, Media player.Build with React</p>
        </div>
    </div>
  )
}

export default Footer