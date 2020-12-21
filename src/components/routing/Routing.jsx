import React from 'react';


import Movie from '../main/movie/Movie';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/Main';
import NavBar from '../navigation/Navbar';






class Routing extends React.Component {

    render(){
        return(
            <>
                <BrowserRouter>
                <header>
                    <NavBar/>            
                </header>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/movie/:id?' component= {Movie}/>
                    </Switch>
                </BrowserRouter>
                    
                
            </>
        )
    }

}

export default Routing;