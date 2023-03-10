import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h2>Header</h2>
            <Link to="/" >Home</Link> <br/>
            <Link to="/about">About</Link> <br/>
        </div>
    );
}