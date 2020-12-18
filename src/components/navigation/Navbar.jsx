import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-light orange lighten-1">
                <div className="container-fluid my-1">
                    <NavLink to="/"> AlloMovie</NavLink>
                </div>
            </nav>
              
        )
    }


}

export default NavBar;