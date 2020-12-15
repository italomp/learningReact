import React, { Component } from 'react';
import { HashLink as Link} from 'react-router-hash-link';

class Header extends Component{ 
    
    render(){
        return(
            <header>
                <div className="menu">
                    <nav>
                        <ul>
                            <li><Link smooth to="#begin">Home</Link></li>
                            <li><Link smooth to="#aboutUs">About</Link></li>
                            <li><Link smooth to="#contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;