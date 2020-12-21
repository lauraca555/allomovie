import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

class NavBar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-light orange lighten-1">
                <div className="container-fluid my-1">
                    <NavLink to="/">AlloMovie</NavLink>
                    <Search/>

                </div>
            </nav>
              
        )
    }


}

export default NavBar;