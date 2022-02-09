import React from 'react'
import Helmet from 'react-helmet';
import Navbar from './Navbar'

export default function Main() {
    return (
        <>
        <Helmet>
             <style>
                {`
                   body {
                    background-color: hsl(207, 64%, 18%);
                    font-family: "Montserrat"
                  }
                
                  .container-fluid {
                    padding: 2% 5% 2% 5%;
                  }
                  
                  /* Navigation Bar */
                  .navbar.navbar-expand-lg.navbar-dark {
                    padding: 0;
                  }
                  
                  .navbar {
                    margin-bottom: 30px;
                  }
                  
                  .navbar-brand {
                    font-family: "Akronim";
                    letter-spacing: 1.5px;
                    padding-left: 7.5%
                  }
                  
                  .navbar-nav {
                    padding-right: 80px;
                  }
                  
                  .nav-item {
                    padding: 0 25px;
                    float: left;
                  }
                  
                  .tagline {
                    padding: 0 0px 0px 100px;
                  }
                  
                  .tagline-spl {
                    color: #3FC1C9;
                    font-size: 50px;
                    letter-spacing: 1.5px;
                    /* position: absolute; */
                    /* margin-top: 25px; */
                  }
                  
                  .title-image {
                    width: 80%;
                    padding-top: 50px;
                  }
                  
                  h6 {
                    color: white;
                    font-size: 38px;
                  }


                  
                  
                  .left-half {
                    background-color: #11324D;
                    border-radius: 100rem;
                    width: 240px;
                    /* height: 1000px; */
                  }
                  
                  .title-image {
                    margin-left: 6rem;
                    width: 65%;
                  }
                  
                  .form-control {
                    border-radius: 1.5rem;
                  }
                  
                  .form-div {
                    background-color: #11324D;
                    border-radius: 2rem;
                    text-align: center;
                    padding: 3rem 2.5rem 1.5rem;
                    width: 100%;
                  }
                  
                  .btn {
                    background: #3FC1C9;
                    border: 1px solid;
                    border-color: #11324D;
                    color: #11324D;
                    border: 0;
                  }
                  
                  .btn:hover {
                    background: #1c4e78;
                    border: 1px solid;
                    border-color: #3FC1C9;
                    text-decoration: none;
                  }
                  
                  .navbar-light {
                    margin-bottom: 0;
                  }
                `}
            </style>
         </Helmet>
            <Navbar />
            {/* componentDidMount(){
                document.body.style.backgroundColor = "#11324D"// Set the style
            } */}
            <section>
                <div class="container-fluid">
                    <div class="row row-cols-2 tagline">
                    <div class="col-6" style={{paddingTop: '15px'}}>
                        <h6>Meet <br /><span style={{ color: '#FF8000', fontSize: '3rem' }} className='navbar-brand'>&nbsp;&nbsp;&nbsp;&nbsp;people,</span></h6>
                        <h6>Share <br /><span style={{ color: '#FF8000', fontSize: '3rem' }} className='navbar-brand'>&nbsp;&nbsp;&nbsp;&nbsp;interests,</span></h6>
                        <h6>Create <br /><span style={{ color: '#FF8000', fontSize: '3rem' }} className='navbar-brand'>&nbsp;&nbsp;&nbsp;&nbsp;community.</span></h6>
                    </div>
                        <div class="col-6" style={{paddingTop: '0'}}>
                            <img class="title-image" src="images/person1.png" alt="person1" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
