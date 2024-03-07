import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './../logo.svg'

const Header = () => {
  return (
    <div>
      <header className="bg-danger text-white p-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2 offset-1">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: '30%', height: 'auto' }}
              />
              <span className="logo-text">Presbyterian</span>
            </div>

            <div className="col-2">
              <span className="navbar-username">Rahul Sah/ 10203903</span>
            </div>

            <div className="col-2">
              <span className="navbar-username">
                <i className="fa fa-star" aria-hidden="true"></i> User Manual
              </span>
            </div>
            <div className="col-2">Logout</div>
            {/* <div className="col-2">
              <section className="referrals-section">
                <button className="referrals-button">View Referrals</button>
              </section>
            </div> */}
          </div>
        </div>
      </header>

      {/* Rest of your component content goes here */}
    </div>
  )
}

export default Header
