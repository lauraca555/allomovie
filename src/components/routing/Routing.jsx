import React from 'react';

import App from '../../App';
import Movie from '../main/movie/Movie';
import { BrowserRouter, Route } from 'react-router-dom';



class Routing extends React.Component {

    render(){
        return(
            <>
                <BrowserRouter>
                    <Route exact path='/' component ={App} />
                    <Route path='/film' component ={Movie} />
                </BrowserRouter>
            </>
        )
    }

}

export default Routing;