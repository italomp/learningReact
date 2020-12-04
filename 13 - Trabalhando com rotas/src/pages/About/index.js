import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                <h2>About us</h2>
                <Link to="/">Back to Home</Link>
            </div>
        );
    }
}

export default About;