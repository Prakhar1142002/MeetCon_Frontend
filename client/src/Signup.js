import React, {
  useState,
  useEffect
} from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Axios from 'axios';

export default function Signup() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [eMail, setEmail] = useState("");
  const [pword, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setgender] = useState("");
    

  // const [UserList, setUserList] = useState([])

    // useEffect(() => {
    //     Axios.get('http://localhost:4000/read').then((response) => {
    //         setUserList(response.data);
    //     })
    // })
    const addToList = () => {
        Axios.post("http:/localhost:3001/ins", {
            ffName: fName,
            llName :lName,
            eeMail :eMail,
            ppword :pword,
            aage : age,
            ggender : gender,
        });
    console.log(fName + " " + lName);
    }

    
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
                    text-decoration: none;
                    background: #3FC1C9;
                    border: 1px solid;
                    border-color: #11324D;
                    color: #11324D;
                    border: 0;
                  }
                  
                  .btn:hover {
                    background-color: #1c4e78;
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
            <Navbar />
            <div className="container-fluid" style={{ paddingTop: '0' }}>
                <div className="row">
                    <div className="col-lg-6 left-half-image" style={{ paddingTop: '2.5rem' }}>
                        <img className="title-image" src='images/person2.png' alt="Loading..." style={{ width: '80%', marginLeft: '1rem' }} />
                    </div>
                    <div className="col-lg-6" style={{ paddingTop: 0 }}>
                        <div className="container-fluid form-div" style={{ marginTop: '0px', padding: '19px'}}>
                            <form>
                                <div className="form-div-name row">
                                    <div className="mb-4 col-lg-6">
                                        <input type="text" className="form-control form-control-lg" placeholder="First Name"
                                        onChange = {
                                          (event) => {
                                            event.preventDefault();
                                              setFname(event.target.value);
                                              event.preventDefault();
                                          }
                                      } />
                                    </div>
                                    <div className="mb-4 col-lg-6">
                                        <input type="text" className="form-control form-control-lg" placeholder="Last Name"
                                        onChange = {
                                          (event) => {
                                            event.preventDefault();
                                              setLname(event.target.value);
                                              
                                          }
                                      } />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control form-control-lg" placeholder="Email address" aria-describedby="emailHelp"
                                    onChange = {
                                      (event) => {
                                          setEmail(event.target.value)
                                      }
                                  } />
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password"
                                    onChange = {
                                      (event) => {
                                          setPassword(event.target.value)
                                      }
                                  } />
                                </div>
                                <div className="form-div-name row">
                                    <div className="mb-4 col-lg-6">
                                        <input type="text" className="form-control form-control-lg" placeholder="Age"
                                        onChange = {
                                          (event) => {
                                              setAge(event.target.value)
                                          }
                                      } />
                                    </div>
                                    <div className="mb-4 col-lg-6">
                                        <input type="text" className="form-control form-control-lg" placeholder="Male/Female/Other"
                                        onChange = {
                                          (event) => {
                                              setgender(event.target.value)
                                          }
                                      } />

                                    </div>
                                </div>

                                <Link className="move_to_login" to="/login"></Link>
                                <button onClick = { addToList } 
                                className="btn btn-lg btn-primary"
                                style={{ margin: '1.5rem auto 0 auto', display: 'block' }}>Sign Up</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
