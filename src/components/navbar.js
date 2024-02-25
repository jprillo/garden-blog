
  import React from "react"
  import {Link} from "gatsby"
  import logo from '../images/logo.png'
  import Button from '../components/button'


  const NavBar = ({ toggleNavbar, isActive, color }) => {

      return(
          <section  className={`navagation-wrap h-pad col-12  ${isActive ? 'mobile-wrap' : ''}`}>

              <div id="main-nav-wrap" >
                  <div className="logo-wrap"  >
                      <Link to="/">
                   <p style={{color: "lightgreen", fontWeight: "900", fontSize: "25px"}}>Florida Butterfly Gardening</p></Link>

                  </div>

                  <div >
                      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul className="nav">
                                     <li className="set"><Link  activeClassName="active" active= "active" to="/">Home</Link></li>
                                     <li className="set"><Link to="/native-plants/" activeClassName="active" >Native Plants</Link></li>
                                     <li className="set"><Link to="/butterflies/" activeClassName="active" >Butterflies</Link></li>
                                     <li className="set"><Link to="/blog/" activeClassName="active" >Blog</Link></li>

                           <li className="set" style={{marginTop: "25px"}}>
                           <Button
                    type="secondary nav-button"
                    cta= "Contact"
                    link= "/contact/"
                 icon= ""

                    />

                              </li>



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
