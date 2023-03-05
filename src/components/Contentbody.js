import React from 'react';


const Contentbody = () => {
  return (      
    <section className="container-body">
        <h2>Explore</h2>
        <p>From one-guest rooms to <br /> penthouses with pools and gardens</p>
        <div className="explore-section">
            <div className="card">
                <img src='assets/images/room1.png' alt="room"/>
                <div className="card-info">
                    <p>Room with one king-size bed</p>
                    <span className="price">35$</span>
                    <span className="dimension price">28м²</span>
                    <button className="book-now price">Book!</button>
                </div>

            </div>
            <div className="card">
            <img src='assets/images/room-penthouse.png' alt="room"/>
                <div className="card-info">
                    <p>Room with one king-size bed</p>
                    <span className="price">35$</span>
                    <span className="dimension price">28м²</span>
                    <button className="book-now price">Book!</button>
                </div>
            </div>

        </div>

        <h2>About us</h2>
        <p>Allow us to tell you a short story...</p>
        <div className="about-section">
            <div className="about-section-left">
                <div className="card w-100">
                <img src='assets/images/room2.png' alt="room"/>
                       
                    <div className="card-info">
                        <h4>Chapter I</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>

                    </div>
                </div>
                <div className="card w-100">                   
                <img src='assets/images/room4.png' alt="room"/>
                    <div className="card-info">
                        <h4>Chapter II</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>

                    </div>
                </div>


            </div>
            <div className="about-section-right">

                <div className="card w-100">

                <img src='assets/images/room3.png' alt="room"/>

                    <div className="card-info">
                        <h4>Chapter III</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>

                    </div>
                </div>

                <div className="card w-100">

                <img src='assets/images/room5.png' alt="room"/>

                    <div className="card-info">
                        <h4>Chapter IV</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>

                    </div>
                </div>
            </div>
        </div> 
        </section>  

  
  )
}

export default Contentbody