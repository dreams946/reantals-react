import React from 'react'

const Header = () => {
  return (
     <>   
     <header>
        <div className="hero-content">
            <h1>Rethink your living & renting</h1>
            <p>Make your stay painless with us</p>
        </div>
        <div className="select-box-wrapper">
            <div className="select-box">
                <div className="box city">
                    <label>City</label>
                    <select>
                        <option>Select your city</option>
                    </select>
                </div>
                <div className="box date">
                    <label>Dates</label>
                    <select>
                        <option>Select your date</option>
                    </select>
                </div>
                <div className="box guests">
                    <label>Guests</label>
                    <select>
                        <option>Add your guests</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="box search-box">
                    <span className="search-icon"></span>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

        </div>

        <div className="down-arrow">
            <img src="assets/images/down-arrow2.png" />
        </div>

        <div className="vector">
            <img src="assets/images/Vector.png" />
        </div>
   </header>     
     </>
   
  )
}

export default Header