import React from 'react'
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Login() {
    return (
        <>
        <Helmet>
             <style>
                {`
                   body {
                    background-color: #3FC1C9;
                    /* background-color: lightsteelblue; */
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
                    color: darkblue;
                    font-size: 45px;
                  }
                `}
            </style>
         </Helmet>
            <Navbar/>
            <div class="container-fluid">
                <div class=" row row-cols-2">

                    <div class="col-6 left-half-image">
                        <img class="title-image" src="images/person2.png" alt="person2" style={{ width: '80%', marginLeft: '1rem' }} />
                    </div>
                    <div class="col-6">
                        <div class="form-div">

                            <form>
                                <div class="mb-3">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" id="exampleInputPassword1" />
                                </div>

                                <Link class="go_to_homepage" to="/homepage">
                                <button type="submit" class="btn btn-lg btn-primary" style={{ margin: '5px' }}>Login</button>
                                </Link>
                                <hr style={{ border: '1px solid', borderRadius: '5px' }} />
                                <Link to="/signup" class="btn btn-lg btn-primary" style={{ margin: '5px 0 0 0' }}>Create New Account</Link>
                                {/* <!-- <button class="btn btn-lg btn-primary" style="margin:5px 0 0 0;">Create New Account</button> --> */}


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
