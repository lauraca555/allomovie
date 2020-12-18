import React from 'react';
import { NavLink } from 'react-router-dom';

class CardButton extends React.Component {

    render(){
        return(
            <>
                <NavLink to="/film"><button type="button" className="btn btn-info mx-5 mb-3">Page</button></NavLink>
            </>
        )
    }

}

export default CardButton;