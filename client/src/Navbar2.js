import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Navbar2() {
    return (
        <>
            <Helmet>
                <style>
                    {`
                        .icondpop{
                            width: 60px;
                            height: 40px;
                            background-size: cover;
                        }
                        .navbar-bar {
                            background-color: #11324D;
                            margin: 0;
                            height: 7rem;
                          }
                          
                          .navbar {
                            padding: 0;
                          }
                          
                          .link-icons {
                            margin: 0 2rem;
                          }
                          
                          .fas {
                            color: transparent;
                            -webkit-text-stroke-width: 1px;
                            -webkit-text-stroke-color: #11324D;
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
                            text-decoration: none;
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
            {/* Navbar for homepage and other screens */}
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#11324D'}}>

            <div>
                <Link class="navbar-brand" style={{color: '#FF8000', fontSize: '4rem', letterSpacing: '3px', margin: '6rem'}} to="/">MeetCon</Link>
            </div>

            <div class="mb" style={{width: '28rem', margin: '0 3rem'}}>
                <input type="text" class="form-control" id="search" placeholder="Search"/>
            </div>

            <button class="navbar-toggler btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                style={{marginRight: '5rem'}}>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-row-reverse ml-auto" id="navbarSupportedContent">

                <ul class="navbar-nav">

                <Link class="link-icons" to="/homepage"><i class="fas fa-home fa-2x" style={{color: '#3FC1C9'}}></i></Link>
                {/* <a class="link-icons" href="#"><i class="fas fa-search fa-2x" style={{color: '#3FC1C9'}}></i></a> */}
                <Link class="link-icons" to="/interest"><i class="fas fa-plus-circle fa-2x" style={{color: '#3FC1C9'}}></i></Link>
                <Link class="link-icons" to="/chat"><i class="fas fa-comments fa-2x" style={{color: '#3FC1C9'}}></i></Link>
                {/* <a class="link-icons" href="#"><i class="fas fa-user fa-2x" style={{color: '#3FC1C9', marginRight: '5rem'}}></i></a> */}
                <Link class="link-icons" to="/profile" style={{height:'35px', width:'50px'}}> 
                    {/* <div class="icon user-profile"></div> */}
                    <img src="img/dp1.jpg" class="icondpop" style={{borderRadius: '30%'}} alt="Loading" />
                </Link>

                </ul>
            </div>

            </nav>
        </>
    )
}
