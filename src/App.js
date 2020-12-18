import React from 'react';
import './App.css';
import NavBar from './components/navigation/Navbar';
import Main from './components/main/Main';





class App extends React.Component {  

  render (){

    return(
      <>
        
        <div className="App">
          <header>
              <NavBar/>            
          </header>
          <Main/>
        </div>
      </>
    )
    
  }

    
   
    
  
}

export default App;
