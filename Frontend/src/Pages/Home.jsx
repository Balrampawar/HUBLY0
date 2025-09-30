import React from 'react'
import { Link } from 'react-router-dom'
import { GoPlay } from "react-icons/go";
import "../style/home.css"

const Home = () => {
  return (
    <>
      <header>
        <img src="/logos/logo.png" alt="" />
        <div className='headerlinks'>
          <Link to="/login" className='login'> login</Link>
          <Link to="/signup" className='signup'> signup</Link>
        </div>
      </header>
      <section>
        <div className="div1">
          <div className="div1left">
            <h1>Grow Your Business Faster with Hubly CRM</h1>
            <p>Manage leads, automate workflows, and close deals effortlessly—all in one powerful platform.</p>
            <div className="div1left_buttons">
              <Link  to="/signup"className='btn1'>Get Started &rarr; </Link>
              <button className='btn2'> <GoPlay /> Watch Video</button>
            </div>

          </div>
          <div className="div1right">
            <img src="src/images/image2.png" alt="" />
          </div>
        </div>
{/* next div */}
        <div className="div2">
          <img src="/logos/companylogo1.png" alt="" />
          <img src="/logos/companylogo2.png" alt="" />
          <img src="/logos/companylogo3.png" alt="" />
          <img src="/logos/companylogo4.png" alt="" />
          <img src="/logos/companylogo2.png" alt="" />
          <img src="/logos/companylogo5.png" alt="" />
        </div>


      </section>

    </>
  )
}

export default Home