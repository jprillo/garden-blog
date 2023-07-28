
  import React from "react"
  import {Link} from "gatsby"
  import logo from '../images/logo.png'
  import Button from '../components/button'


  const NavBar = ({ toggleNavbar, isActive, color }) => {

      return(
          <section  className={`navagation-wrap h-pad col-12  ${isActive ? 'mobile-wrap' : ''}`}>

              <div id="main-nav-wrap" >
                  <div className="logo-wrap" >
                      <Link to="/">
                    <img width="100%" src= {logo} alt="Jason Prillo Web Development Logo" /> </Link>

                  </div>

                  <div >
                      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul className="nav">
                                     <li><Link  activeClassName="active" active= "active" to="/">Home</Link></li>
                                     <li><Link to="/native-plants/" activeClassName="active" >Native PLants</Link></li>
                                     <li><Link to="/butterflies/" activeClassName="active" >Butterlies</Link></li>
                                     <li><Link to="/blog/" activeClassName="active" >Blog</Link></li>

                           <div className="nav-button-container">
                           <Button
                    type="secondary nav-button"
                    cta= "Contact"
                    link= "/contact/"
                 icon= ""

                    />

                              </div>



                          </ul>
                      </div>

                  </div>



                  <div id="hamburger-wrap">
                      <div  className={` burger-open ${isActive ? 'burger-close' : ''}`}

              data-target='nav-menu'
              onClick={toggleNavbar}
              aria-hidden={true}>
                          <span className="line line01"></span>
                          <span className="line line02"></span>
                          <span className="line line03"></span>
                      </div>
                  </div>

              </div>
          </section>

      )
  }
  export default NavBar
