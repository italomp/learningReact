import React, { Component } from 'react';
import Begin from '../../components/Begin';
import AboutUs from '../../components/AboutUs';
import Contact from '../../components/Contact';
import '../../style.css';

class Home extends Component{ 
    
    render(){
        return(
            <div>
                <Begin/>
                <AboutUs/>
                <Contact/>
            </div>
        );
    }
}

export default Home;