import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <Helmet>
                <style>
                    {`
                        .nav-item{
                            font-size: 20px;
                        }
                        .nav-link:hover {
                            // background-color: #3FC1C9;
                            // background-color: red;
                            background-color: lightsteelblue;
                        }

                    `}
                </style>
            </Helmet>
            <div class="container-fluid" style={{ paddingTop: '0px', height: '130px' }}>
                {/* <!-- NavBar --> */}
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class=" container-fluid">
                        <div class="col-lg-6 left-half">
                            <Link class="navbar-brand" style={{ color: '#FF8000', fontSize: '4rem', letterSpacing: '3px', marginTop: '0' }} to="/">MeetCon</Link>
                        </div>
                        <button class="navbar-toggler btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            style={{ marginRight: '5px' }}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse flex-row-reverse ml-auto" id="navbarSupportedContent">

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login" style={{ color: 'white'}}>Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/signup" style={{ color: 'white'}}>Signup</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about" style={{ color: 'white'}}>About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
