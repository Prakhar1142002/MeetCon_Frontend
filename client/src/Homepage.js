import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar2 from './Navbar2'

export default function Homepage() {
    return (
        <>
        <Helmet>
            <style>
                {`
                    
                    body{
                        background-color: rgba(248, 248, 255, 0.842);;
                        font-family: 'Roboto', sans-serif;
                        
                    }
                    .navbarop{
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 50px;
                        /* background: #fff; */
                        background: white;
                        border-bottom: 2px solid cyan;
                        display: flex;
                        justify-content: center;
                        padding: 5px 0;
                    }
                    .nav-wrapperrrr{
                        width: 70%;
                        max-width: 1000px;
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .brand-img{
                        width: 175px;
                        height: 38px;
                        margin-top: 5px;
                    }
                    .search-box{
                        position: absolute;
                        /* padding-top: 30px; */
                        left: 46%;
                        transform: translateX(-50%);
                        width: 410px;
                        height: 33px;
                        background: #fafafa;
                        border: 1px solid black;
                        border-radius: 8px;
                        color: rgba(0, 0, 0, 0.5);
                        text-align: center;
                        text-transform: capitalize;
                    }
                    .search-box::placeholder{
                        color: rgba(0, 0, 0, 0.5);
                    }
                    .nav-items{
                        height: 22px;
                        position: relative;
                    }
                    .icon{
                        height: 100%;
                        cursor: pointer;
                        margin: 0 10px;
                        display: inline-block;
                    }
                    .icon:hover{
                        background-color: cyan;
                    }
                    .user-profile{
                        width: 23px;
                        border-radius: 50%;
                        /* background-image: url(img/dp.jpg); */
                        background-size: cover;
                    }
                    .main{
                        width: 100%;
                        padding: 40px 0;
                        display: flex;
                        justify-content: center;
                        margin-top: 50px;
                    }
                    .wrapper{
                        width: 70%;
                        min-width: 1000px;
                        display: grid;
                        grid-template-columns: 60% 40%;
                        grid-gap: 30px;
                    }
                    .left-col{
                        display: flex;
                        flex-direction: column;
                    }
                    .status-wrapper{
                        width: 100%;
                        height: 120px;
                        background: #fff;
                        border: 1px solid #dfdfdf;
                        border-radius: 2px;
                        padding: 10px;
                        padding-right: 0;
                        display: flex;
                        align-items: center;
                        overflow: hidden;
                        overflow-x: auto;
                    }
                    /* .status-wrapper::-webkit-scrollbar{
                        display: none;
                    } */
                    .status-card{
                        flex: 0 0 auto;
                        width: 80px;
                        max-width: 80px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 15px;
                    }
                    .profile-pic{
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        overflow: hidden;
                        padding: 3px;
                        background: linear-gradient(45deg, red, cyan 80%);
                    }
                    .profile-pic img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                        border: 2px solid #fff;
                    }
                    
                    .username{
                        width: 100px;
                        overflow: hidden;
                        text-align: center;
                        font-size: 12px;
                        margin-top: 5px;
                        color: rgba(0, 0, 0, 0.5);
                        font-weight: 400px;
                    }
                    .post{
                        width: 100%;
                        height: auto;
                        background: #fff;
                        border: 1px solid #dfdfdf;
                        margin-top: 40px;
                    }
                    .info{
                        width: 100%;
                        height: 60px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 20px;
                    }
                    .info .username{
                        width: auto;
                        font-weight: bold;
                        color: #000;
                        font-size: 14px;
                        margin-left: 10px;
                    }
                    .info .options{
                        height: 10px;
                        cursor: pointer;
                    }
                    .info .user{
                        display: flex;
                        align-items: center;
                    }
                    .info .profile-pic{
                        height: 40px;
                        width: 40px;
                        padding: 0;
                        background: none;
                    }
                    .info .profile-pic img{
                        border: none;
                    }
                    .post-image{
                        width: 100%;
                        height: 500px;
                        object-fit: cover;
                    }
                    .post-content{
                        width: 100%;
                        padding: 20px;
                    }
                    .likes{
                        font-weight: bold;
                    }
                    .description{
                        margin: 10px 0;
                        font-size: 14px;
                        line-height: 20px;
                    }
                    .description span{
                        font-weight: bold;
                        margin-right: 10px;
                    }
                    .post-time{
                        color: rgba(0, 0, 0, 0.5);
                        font-size: 12px;
                    }
                    .comment-wrapper{
                        width: 100%;
                        height: 50px;
                        border-radius: 1px solid #dfdfdf;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .comment-wrapper .icon{
                        height: 30px;
                    }
                    .comment-box{
                        width: 80%;
                        height: 100%;
                        border: none;
                        outline: none;
                        font-size: 14px;
                    }
                    .comment-btn,
                    .action-btn{
                        width: 70px;
                        height: 100%;
                        background: none;
                        border: none;
                        outline: none;
                        cursor: pointer;
                        text-transform: capitalize;
                        color: rgb(0, 162, 255);
                        font-size: 16px;
                        opacity: 0.5;
                    }
                    .action-btn{
                        opacity: 1;
                        font-weight: 700;
                        font-size: 12px;
                    }
                    .comment-btn:hover{
                        color: cyan;
                    }
                    .action-btn:hover{
                        color: cyan;
                    }
                    .reaction-wrapper{
                        width: 100%;
                        height: 50px;
                        display: flex;
                        margin-top: -20px;
                        align-items: center;
                    }
                    .reaction-wrapper .icon{
                        height: 25px;
                        margin: 0;
                        margin-right: 20px;
                    }
                    .reaction-wrapper .icon.save{
                        margin-left: auto;
                    }
                    .right-col{
                        padding: 20px;
                    }
                    .profile-card{
                        width: fit-content;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 10px;
                    }
                    .profile-card .profile-pic{
                        flex: 0 0 auto;
                        padding: 0;
                        background: none;
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                    }
                    .profile-card:first-child .profile-pic{
                        width: 70px;
                        height: 70px;
                    }
                    .profile-card .profile-pic img{
                        border: none;
                    }
                    .profile-card .username{
                        font-weight: 1000;
                        font-size: 14px;
                        color: #000;
                    }
                    .sub-text{
                        color: rgba(0, 0, 0, 0.5);
                        font-size: 12px;
                        font-weight: 500px;
                        margin-top: 5px;
                        margin-left: 14px;
                    }
                    svg{
                        width: 40px;
                        height: 25px;
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
                `}
            </style>
        </Helmet>
            <Navbar2 />

            <section class="main">
                <div class="wrapper">
                    <div class="left-col">
                        <div class="status-wrapper">
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 1.png" alt="" /></div>
                                <p class="username">Prakhar_Rai</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 2.png" alt="" /></div>
                                <p class="username">Atharva_Patilpate</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 3.png" alt="" /></div>
                                <p class="username">Ratan_Patil</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 4.png" alt="" /></div>
                                <p class="username">Pushkaraj_Bhor</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 5.png" alt="" /></div>
                                <p class="username">user_name_5</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 6.png" alt="" /></div>
                                <p class="username">user_name_6</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 7.png" alt="" /></div>
                                <p class="username">user_name_7</p>
                            </div>
                            <div class="status-card">
                                <div class="profile-pic"><img src="img/cover 8.png" alt="" /></div>
                                <p class="username">user_name_8</p>
                            </div>
                        </div>
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><img src="img/cover 1.png" alt="Loading" /></div>
                                    <p class="username">Prakhar_Rai_channel</p>
                                </div>
                                <img src="img/option.PNG" class="options" alt="Loading" />
                            </div>

                            <img src="img/cover 1.png" class="post-image" alt="" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src="img/like.PNG" class="icon" alt="" />
                                    <img src="img/comment.PNG" class="icon" alt="" />
                                    <img src="img/send.PNG" class="icon" alt="" />
                                    <img src="img/save.PNG" class="save icon" alt="" />
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officiis vero voluptatibus? Commodi iure placeat porro inventore, laborum blanditiis odit.</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src="img/smile.PNG" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">Post</button>
                            </div>
                        </div>
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><img src="img/cover 2.png" alt="Loading" /></div>
                                    <p class="username">Atharva_Patilpate_channel</p>
                                </div>
                                <img src="img/option.PNG" class="options" alt="Loading" />
                            </div>

                            <img src="img/cover 2.png" class="post-image" alt="" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src="img/like.PNG" class="icon" alt="" />
                                    <img src="img/comment.PNG" class="icon" alt="" />
                                    <img src="img/send.PNG" class="icon" alt="" />
                                    <img src="img/save.PNG" class="save icon" alt="" />
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officiis vero voluptatibus? Commodi iure placeat porro inventore, laborum blanditiis odit.</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src="img/smile.PNG" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">Post</button>
                            </div>
                        </div>
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><img src="img/cover 3.png" alt="Loading" /></div>
                                    <p class="username">Ratan_Patil_channel</p>
                                </div>
                                <img src="img/option.PNG" class="options" alt="Loading" />
                            </div>

                            <img src="img/cover 3.png" class="post-image" alt="" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src="img/like.PNG" class="icon" alt="" />
                                    <img src="img/comment.PNG" class="icon" alt="" />
                                    <img src="img/send.PNG" class="icon" alt="" />
                                    <img src="img/save.PNG" class="save icon" alt="" />
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officiis vero voluptatibus? Commodi iure placeat porro inventore, laborum blanditiis odit.</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src="img/smile.PNG" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">Post</button>
                            </div>
                        </div>
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><img src="img/cover 4.png" alt="Loading" /></div>
                                    <p class="username">Pushkaraj_Bhor_channel</p>
                                </div>
                                <img src="img/option.PNG" class="options" alt="Loading" />
                            </div>

                            <img src="img/cover 4.png" class="post-image" alt="" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src="img/like.PNG" class="icon" alt="" />
                                    <img src="img/comment.PNG" class="icon" alt="" />
                                    <img src="img/send.PNG" class="icon" alt="" />
                                    <img src="img/save.PNG" class="save icon" alt="" />
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officiis vero voluptatibus? Commodi iure placeat porro inventore, laborum blanditiis odit.</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src="img/smile.PNG" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">Post</button>
                            </div>
                        </div>
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><img src="img/cover 5.png" alt="Loading" /></div>
                                    <p class="username">modern_web_channel</p>
                                </div>
                                <img src="img/option.PNG" class="options" alt="Loading" />
                            </div>

                            <img src="img/cover 5.png" class="post-image" alt="" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src="img/like.PNG" class="icon" alt="" />
                                    <img src="img/comment.PNG" class="icon" alt="" />
                                    <img src="img/send.PNG" class="icon" alt="" />
                                    <img src="img/save.PNG" class="save icon" alt="" />
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officiis vero voluptatibus? Commodi iure placeat porro inventore, laborum blanditiis odit.</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src="img/smile.PNG" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">Post</button>
                            </div>
                        </div>
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><img src="img/cover 6.png" alt="Loading" /></div>
                                    <p class="username">modern_web_channel</p>
                                </div>
                                <img src="img/option.PNG" class="options" alt="Loading" />
                            </div>

                            <img src="img/cover 6.png" class="post-image" alt="" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src="img/like.PNG" class="icon" alt="" />
                                    <img src="img/comment.PNG" class="icon" alt="" />
                                    <img src="img/send.PNG" class="icon" alt="" />
                                    <img src="img/save.PNG" class="save icon" alt="" />/
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officiis vero voluptatibus? Commodi iure placeat porro inventore, laborum blanditiis odit.</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src="img/smile.PNG" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">Post</button>
                            </div>
                        </div>
                    </div>
                    <div class="right-col">
                        <div class="profile-card">
                            <div class="profile-pic">
                                <img src="img/profile-pic.png" alt="" />
                            </div>
                            <div>
                                <p class="username">Prakhar_Rai</p>
                                <p class="sub-text">I Love Lord Krishna</p>
                            </div>
                            <button class="action-btn">Switch</button>
                        </div>
                        <div class="profile-card">
                            <div class="profile-pic">
                                <img src="img/cover 9.png" alt="" />
                            </div>
                            <div>
                                <p class="username">Prakhar_Rai</p>
                                <p class="sub-text">Followed by Atharva</p>
                            </div>
                            <button class="action-btn">Follow</button>
                        </div>
                        <div class="profile-card">
                            <div class="profile-pic">
                                <img src="img/cover 10.png" alt="" />
                            </div>
                            <div>
                                <p class="username">Prakhar_Rai</p>
                                <p class="sub-text">Followed by Atharva</p>
                            </div>
                            <button class="action-btn">Follow</button>
                        </div>
                        <div class="profile-card">
                            <div class="profile-pic">
                                <img src="img/cover 11.png" alt="" />
                            </div>
                            <div>
                                <p class="username">Prakhar_Rai</p>
                                <p class="sub-text">Followed by Atharva</p>
                            </div>
                            <button class="action-btn">Follow</button>
                        </div>
                        <div class="profile-card">
                            <div class="profile-pic">
                                <img src="img/cover 12.png" alt="" />
                            </div>
                            <div>
                                <p class="username">Prakhar_Rai</p>
                                <p class="sub-text">Followed by Ratan</p>
                            </div>
                            <button class="action-btn">Follow</button>
                        </div>
                        <div class="profile-card">
                            <div class="profile-pic">
                                <img src="img/cover 13.png" alt="" />
                            </div>
                            <div>
                                <p class="username">Prakhar_Rai</p>
                                <p class="sub-text">Followed by Pushkaraj</p>
                            </div>
                            <button class="action-btn">Follow</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

