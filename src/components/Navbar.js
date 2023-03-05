import React from 'react'

const Navbar = () => {
  return (  
            
            <nav>
                <a className="logo"> Your Logo</a>
                <ul className="menu">
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">About Us</a></li>
                    <li className="menu-city"><a href="#">Cities</a></li>
                    <li><a href="#" className="btn-light">Call</a></li>
                </ul>
                <div className="burgr-menu">
                    <img src="assets/images/hamburger-menu.png" />
                </div>
            </nav>
         
        
    
   
  )
}

export default Navbar