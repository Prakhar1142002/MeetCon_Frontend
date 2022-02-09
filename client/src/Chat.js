import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar2 from './Navbar2'

export default function Chat() {
    return (
        <>
        <Helmet>
            <style>
                {`
                    .below_nav{
                        margin-top: 60px;
                        display: grid;
                        grid-template-columns: 1.3fr 3fr;
                    }
                    .container1{
                        background-color: #3FC1C9;
                        height: 1000px;
                        text-align: center;
                    }
                    .container2{
                        background-color: #11324D;
                        height: 1000px;
                    
                    }
                    .searchbox{
                        margin-top: 5px;
                        justify-content: center;
                        text-align: center;
                        width: 370px;
                        height: 35px;
                        border-radius: 15px;
                    }
                    .input-icons{
                        margin-top: 5px;
                    }
                    .input-icons i {
                        position: absolute;
                        margin-top: 2.3px;
                    }
                    
                    .input-field{
                        text-align: center;
                    }
                    .list_contacts{
                        cursor: pointer;
                        color: white;
                    }
                    
                    hr{
                        color: white;
                    }
                    
                    .list_contacts :hover{
                        background-color: rgb(169, 195, 230);
                        color: white;
                    }
                    .list_contacts img{
                        width: 50px;
                        height: 50px;
                    }
                    .container2 h3{
                        text-align: center;
                        color: white;
                    }
                    .container2 img{
                        /* margin-top: 10px; */
                        margin-left: 10px;
                        width: 80px;
                        height: 80px;
                    }
                    .container2 .sub_container2{
                        display: flex;
                        justify-content: center;
                        color: white;
                        /* margin-bottom: 10px; */
                    }
                    .activity{
                        float: right;
                        margin: 10px;
                        background-color: rgb(20, 189, 20);
                        border-radius: 20px;
                        padding: 5px;
                        color: white;
                    }
                    .msgs{
                        margin: 10px;
                        overflow: hidden;
                        padding: 10px;
                        width: 450px;
                        height: 100px;
                        background-color: rgb(209, 202, 202);
                        border-radius: 15px;
                        color: white;
                    }
                    .our_msgs{
                        margin: 10px;
                        float: right;
                        padding: 10px;
                        width: 450px;
                        height: 70px;
                        background-color: blue;
                        border-radius: 15px;
                        color: white;
                    }
                `}
            </style>
        </Helmet>
            <Navbar2/>

            <div class="below_nav">
        <div class="container1">
            <input type="search" placeholder="Search Contacts" class="searchbox"/>
            <div class="input-icons">
                <i class="fa fa-user icon"></i>
                <input class="input-field" type="search" placeholder="Recents"/>
                <select class="recents">
                    <option value="volvo">Prakhar</option>
                    <option value="saab">Atharva</option>
                    <option value="opel">Pushkaraj</option>
                    <option value="audi">Ratan</option>
                </select>
            </div>
            <hr/>
            <div class="contacts">
                <div class="list_contacts">
                    <div class="Contact1">
                        <img src="img/cover 1.png" alt=""/>
                        Contact1
                        <hr/>
                    </div>
                    <div class="Contact2">
                        <img src="img/cover 1.png" alt=""/>
                        Contact2
                        <hr/>
                    </div>
                    <div class="Contact3">
                        <img src="img/cover 1.png" alt=""/>
                        Contact3
                        <hr/>
                    </div>
                    <div class="Contact4">
                        <img src="img/cover 1.png" alt=""/>
                        Contact4
                        <hr/>
                    </div>
                    <div class="Contact5">
                        <img src="img/cover 1.png" alt=""/>
                        Contact5
                        <hr/>
                    </div>
                    <div class="Contact6">
                        <img src="img/cover 1.png" alt=""/>
                        Contact6
                        <hr/>
                    </div>
                    <div class="Contact7">
                        <img src="img/cover 1.png" alt=""/>
                        Contact7
                        <hr/>
                    </div>
                    <div class="Contact8">
                        <img src="img/cover 1.png" alt=""/>
                        Contact8
                        <hr/>
                    </div>
                    <div class="Contact9">
                        <img src="img/cover 1.png" alt=""/>
                        Contact9
                        <hr/>
                    </div>
                    <div class="Contact10">
                        <img src="img/cover 1.png" alt=""/>
                        Contact10
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container2">
            <h3>Chats</h3>
            <hr/>
            <div class="Contact1">
                <div class="activity">
                    Online
                </div>
                <img src="img/cover 1.png" alt=""/>
                <div class="sub_container2">
                    <p><b>Contact1</b></p>   
                </div> <hr/>
                <div class="msgs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere, aliquam obcaecati aut sapiente est sunt ab nemo itaque iusto beatae minima odio ad adipisci eum totam iure nulla. Consequatur.
                </div>
                <div class="our_msgs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere, aliquam obcaecati aut sapiente est
                </div>
                <div class="msgs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere, aliquam obcaecati aut sapiente est Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ipsam.
                </div>
            </div>

        </div>
    </div>
        </>
    )
}
