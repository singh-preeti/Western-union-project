import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Western Union</a>
            <div className='ui right floated header'>
                <button className='ui button'>
                    <Link to="/home">Home</Link>
                </button>
                <button className='ui button'>
                    <Link to="/contactt">Contact</Link>
                </button>
                <button className='ui button'>
                    <Link to="/about">About</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;