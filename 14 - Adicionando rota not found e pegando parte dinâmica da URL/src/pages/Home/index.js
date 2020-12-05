import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Welcome to Home!</h2>
                <Link to="/about">Go to about us</Link>
            </div>
        );
    }
}

export default Home;