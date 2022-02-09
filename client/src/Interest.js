import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from './Navbar2'
import { Helmet } from 'react-helmet'

export default class Interest extends Component {

  render(){

    return (
        <>

            <Helmet>
               <script src="./Createpost.js" type="text/javascript" />
            </Helmet>

            <Helmet>
                <style>
                    {`
                        body{
                            background-color: #3cdfff;
                        }
                        div.scrollmenu {
                            /* margin-top: 20px; */
                            background-color: black;
                            overflow: auto;
                            white-space: nowrap;
                          }
                          
                          div.scrollmenu a {
                            /* display: inline-block; */
                            color: white;
                            /* text-align: center; */
                            padding: 14px;
                            text-decoration: none;
                          }
                          
                          div.scrollmenu a:hover {
                            background-color: #777;
                          }
                          .scrollmenu img{
                            height: 360px;
                            width: 350px;
                          }
                        
                          .scrollmenu{
                              display: flex;
                          }
                          .sect{
                              display: flex;
                          }


                        //   creating post css

                        .container{
                            height: 350px;
                            width: 430px;
                            position: relative;
                          }
                          .container .wrapper{
                            position: relative;
                            height: 300px;
                            width: 100%;
                            border-radius: 10px;
                            background: #fff;
                            border: 2px dashed #c2cdda;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                          }
                          .wrapper.active{
                            border: none;
                          }
                          .wrapper .image{
                            position: absolute;
                            height: 100%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                          }
                          .wrapper img{
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                          }
                          .wrapper .icon{
                            font-size: 100px;
                            color: #9658fe;
                          }
                          .wrapper .text{
                            font-size: 20px;
                            font-weight: 500;
                            color: #5B5B7B;
                          }
                          .wrapper #cancel-btn i{
                            position: absolute;
                            font-size: 20px;
                            right: 15px;
                            top: 15px;
                            color: #9658fe;
                            cursor: pointer;
                            display: none;
                          }
                          .wrapper.active:hover #cancel-btn i{
                            display: block;
                          }
                          .wrapper #cancel-btn i:hover{
                            color: #e74c3c;
                          }
                          .wrapper .file-name{
                            position: absolute;
                            bottom: 0px;
                            width: 100%;
                            padding: 8px 0;
                            font-size: 18px;
                            color: #fff;
                            display: none;
                            background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
                          }
                          .wrapper.active:hover .file-name{
                            display: block;
                          }
                          .container #custom-btn{
                            margin-top: 30px;
                            display: block;
                            width: 100%;
                            height: 50px;
                            border: none;
                            outline: none;
                            border-radius: 25px;
                            color: #fff;
                            font-size: 18px;
                            font-weight: 500;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                            cursor: pointer;
                            background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
                          }
                          h3{
                            justify-content: center;
                            align-items: center;
                          }
                    `}
                </style>
            </Helmet>
            <Navbar2 />

            <div className="scrollmenu">
                <div class="sect"><Link to="/business">
                    <img src="img/cover 1.png" alt="Loading" />
                    Business
                </Link>
                </div>
                <div class="sect"><Link to="/sports">
                    <img src="img/cover 2.png" alt="Loading" />
                    Sports
                </Link>
                </div>
                <div class="sect"><Link to="/news">
                    <img src="img/cover 3.png" alt="Loading" />
                    News
                </Link>
                </div>
                <div class="sect"><Link to="/crypto">
                    <img src="img/cover 4.png" alt="Loading" />
                    CryptoCurrency
                </Link>
                </div>
                <div class="sect"><Link to="/music">
                    <img src="img/cover 5.png" alt="Loading" />
                    Music
                </Link>
                </div>
                <div class="sect"><a href="#about">
                    <img src="img/cover 6.png" alt="Loading" />
                    Bollywood
                </a>
                </div>
                <div class="sect"><a href="#about">
                    <img src="img/cover 7.png" alt="Loading" />
                    Hollywood
                </a>
                </div>
            </div>

            {/* <div className="tempo">
                <p>
                    
                </p>
            </div> */}

            {/* creating posts */}


            <div class="container" style={{paddingTop: '55px'}}>
         <div class="wrapper">
            <div class="image">
               <img src="" alt=""/>
            </div>
            <div class="content">
               <div class="icon">
                  <i class="fas fa-cloud-upload-alt"></i>
               </div>
               <div class="text">
                  No file chosen, yet!
               </div>
            </div>
            <div id="cancel-btn">
               <i class="fas fa-times"></i>
            </div>
            <div class="file-name">
               File name here
            </div>
         </div>
         <button onclick= "defaultBtnActive()" id="custom-btn">Choose a file</button>
         <input id="default-btn" type="file" hidden />
      </div>

      
        

        </>
    )

  }
}
