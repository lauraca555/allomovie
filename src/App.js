import React from 'react';
import './App.css';
import NavBar from './components/navigation/Navbar';

import Routing from './components/routing/Routing';








class App extends React.Component {  

  render (){

    return(
      <>
          <div className="App">
            <header>
                <NavBar/>            
            </header>
            <Routing/>
          </div>
      </>
    )
    
  }

    
   
    
  
}

export default App;
