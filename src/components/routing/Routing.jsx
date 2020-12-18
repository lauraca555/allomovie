import React from 'react';


import Movie from '../main/movie/Movie';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/Main';






class Routing extends React.Component {

    render(){
        return(
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/film' component={Movie} />
                    </Switch>
                </BrowserRouter>
                    
                
            </>
        )
    }

}

export default Routing;