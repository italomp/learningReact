import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{ 

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Header Project</h1>
                <Link to="/"> Go Home</Link>
                <hr/>
            </div>
        );
    }
}



export default Header;