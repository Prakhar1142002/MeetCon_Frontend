import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Navbar2 from './Navbar2'

export default class NewsAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=02eda2ae3d4045acaea7c40286459dbf')
        .then((response)=>{
            return response.json();
        })
        .then((myJson)=>{
            this.setState({
                articles: myJson.articles
            }); 
        });
    }
    render() {
        console.log(this.state);

        return (
            <>
            <Helmet>
            <style>
                {`
                    .container{
                        display: flex;
                        place-content: center;
                    }
                    .card{
                        margin: 10px;
                        background-color: white;
                    }
                    .card:hover{
                        background-color:rgb(37, 34, 34);
                        color: white;
                    }
                    .sample{
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .newsapi{
                        margin: 10px;
                        padding: 10px;
                    }
                    .forflex{
                        display: flex;
                    }
                `}
            </style>
            </Helmet>
                <Navbar2 />
                

                {/* news api */}
                {/* <div className="newsapi">
                    {this.state.articles.map((item,index)=>{
                        return (
                            <div className="innernewsapi">
                                <h2>
                                    {item.title}
                                </h2>
                                <h5>
                                    {item.description}
                                </h5>
                                <div className="forflex">
                                <p>
                                    {item.content}
                                    &nbsp;&nbsp;
                                <a href={item.url} target={"_blank"}>Read More...</a>
                                </p>
                                </div>

                                <img src={item.urlToImage} alt="Loading..." style={{width:'50vw'}} />
                                <hr />

                            </div>
                        )
                    })}
                </div> */}



                {/* newsapi trial2 */}
                <div className='container my-3'>
                    <div className="sample">
                        Business
                    </div>
                </div>

                <div className="newsapi">
                    {this.state.articles.map((item,index)=>{
                        return (
                            <div className="container">
                                <div class="card" style={{ width: '60rem' }}>
                                
                                <img src={item.urlToImage} style={{height:'30vw'}} class="card-img-top" alt='Loading...'  onError={this.src="images/person1.png"} />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text"><h9>{item.description}</h9></p>
                                    <p class="card-text">{item.content}</p>
                                    <a href={item.url} target={"_blank"} class="btn btn-primary">Read More...</a>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </>
        )
    }
}

