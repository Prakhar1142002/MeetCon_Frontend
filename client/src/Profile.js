import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar2 from './Navbar2'

export default function Profile() {
    return (
        <>
        <Helmet>
            <style>
                {`
                    .profile-image img{
                        padding-left: 30px;
                        width: 270px;
                        height: 235px;
                        display: block;
                    }
                    
                    .container{
                        max-width: 93.5rem;
                        margin: 0 auto;
                        padding: 0 2rem;
                    }
                    
                    .btn{
                        outline: 0.5rem auto #4d90fe;
                    }
                    
                    .visually-hidden{
                        position: absolute;
                        height: 1px;
                        widows: 1px;
                        overflow: hidden;
                        clip: rect(1px, 1px, 1px, 1px);
                    }
                    
                    /*Profile section*/
                    
                    .profile {
                        padding: 5rem 0;
                    
                    }
                    
                    .profile::after {
                        content: "";
                        display: block;
                        clear: both;
                    }
                    
                    .profile-image {
                        float: left;
                        width: calc(33.333% - 1rem);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 3rem;
                        margin-top: 30px;
                    } 
                    
                    .profile-image img {
                        border-radius: 50%;
                    }
                    
                    .profile-user-settings,
                    .profile-stats,
                    .profile-bio {
                        float: left;
                        width: calc(66.666% - 2rem);
                    }
                    
                    .profile-user-settings{
                        margin-top: 7.1rem;
                    }
                    
                    .profile-user-name{
                        display: inline-block;
                        font-size: 3.2rem;
                        font-weight: 300;
                    }
                    .profile-edit-btn{
                        font-size: 1.4rem;
                        line-height: 1.8;
                        border: 0.1rem solid #dbdbdb;
                        border-radius: 0.3rem;
                        padding: 0 2.4rem;
                        margin-left: 2rem;
                        
                    }
                    
                    .profile-settings-btn{
                        font-size: 2rem;
                        margin-left: 1rem;
                    }
                    
                    .profile-stats {
                        margin-top: 2.3rem;
                    
                    }
                    .profile-stats li{
                        display: inline-block;
                        font-size: 1.6rem;
                        line-height: 1.5;
                        margin-right: 1.6rem;
                        cursor: pointer;
                        font-weight: 700;
                    }
                    
                    .profile-stats li:last-of-type{
                        margin-right: 0;
                    }
                    
                    .profile-bio{
                        font-size: 1.6rem;
                        font-weight: 400;
                        line-height: 1.5;
                        margin-top: 2.3rem;
                    }
                    
                    .profile-real-name,
                    .profile-stat-count,
                    .profile-edit-btn{
                        font-weight:600;
                    }
                    
                    .gallery {
                        display: flex;
                        flex-wrap: wrap;
                        margin: -1rem -1rem;
                        padding-bottom: 3rem;
                    }
                    
                    .gallery-item{
                        position: relative;
                        flex: 1 0 22rem;
                        margin: 1rem;
                        color: #fff;
                        cursor: pointer;
                    }
                    
                    .gallery-item:hover .gallery-item-info,
                    .gallery-item:focus .gallery-item-info{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, .3);
                    }
                    
                    .gallery-item-info{
                        display: none;
                    }
                    
                    .gallery-item-info li{
                        display: inline-block;
                        font-size: 1.7rem;
                        font-weight: 600;
                    }
                    
                    .gallery-item-likes {
                        margin-right: 2.2rem;
                    }
                    
                    .gallery-item-type{
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                        font-size: 2.5rem;
                        text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, .1);
                    }
                    
                    .fa-clont,
                    .fa-comment{
                        transform: rotateY(180deg);
                        
                    }
                    
                    .gallery-image{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    /*css grid suppport for following*/
                    
                    @supports (display: grid) {
                        .profile{
                            display: grid;
                            grid-template-columns: 1.7fr 2fr;
                            grid-template-rows: repeat(3, auto);
                            grid-column-gap: 3rem;
                            align-items: center;
                        }
                    
                        .profile-image{
                            grid-row: 1 / -1;
                        }
                    }
                `}
            </style>
        </Helmet>
            <Navbar2/>

            <header>
        <div class="container">
            <div class="profile">
                <div class="profile-image">
                    <img src="img/dp1.jpg" alt="user"/>
                </div>
                <div class="profile-user-settings">
                    <h1 class="profile-user-name" style={{color: 'white'}}><b>Meetcon_Developers</b></h1>
                    <button class="btn profile-edit-btn">Edit Profile</button>
                    <button class="btn profile-settings-btn" aria-label="Profile Settings"><i class="fas fa-cog" aria-hidden=""></i></button>
                </div>
                <div class="profile-stats">
                    <ul>
                        <li><span class="profile-stat-count">104 </span>posts</li>
                        <li><span class="profile-stat-count">1640 </span>followers</li>
                        <li><span class="profile-stat-count">1250 </span>following</li>
                    </ul>
                </div>
                <div class="profile-bio">
                    <p><span class="profile-real-name" style={{color: 'white'}}>Meetcon Dev.</span> Prakhar Rai, Atharva Patilpate, Pushkaraj Bhor, Ratan Patil</p>
                </div>
            </div>
            {/* <!-- end of profile section --> */}
        </div>
        {/* <!--end of container--> */}
    </header>

    <main>
        <div class="container">
            <div class="gallery">
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="https://i.pinimg.com/564x/30/a2/e2/30a2e232eb87ee1d8cc3512f4200a101.jpg" alt="" class="gallery-image"/>
                    <div class="gallery-item-type">
                        <span class="visually-hidden">Gallery</span>
                        <i class="fas-fa-clone" aria-hidden></i>
                    </div>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="https://img.freepik.com/free-photo/silhouette-dj-gesturing-spinning-turntable_85574-4076.jpg?size=626&ext=jpg" alt="" class="gallery-image"/>
                    <div class="gallery-item-type">
                        <span class="visually-hidden">Video</span>
                        <i class="fas-fa-video" aria-hidden></i>
                    </div>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-type">
                        <span class="visually-hidden">Gallery</span>
                        <i class="fas-fa-clone" aria-hidden></i>
                    </div>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- end of gallery--> */}
        </div>
        <div class="loader"></div>
    </main>
        </>
    )
}
