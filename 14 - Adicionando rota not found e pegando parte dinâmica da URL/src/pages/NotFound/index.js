import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Page Not Found, try:</h2>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/about">About us</Link>
            </div>
        );
    }

}

export default NotFound;