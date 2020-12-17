import React from 'react';
import apiMovie from '../axios/apiMovie';
import Board from './board/Board';


class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            
        }
      }
    
      componentDidMount() {
    
          apiMovie.get('discover/movie')
                  .then((response) => {
                        
                        this.setState({
                            movies : response.data.results, 
                            isLoaded:true
                        })
                  })  
                  .catch((error) => {
                        console.log(error);
                  })
    
      }

      render(){
          if(this.state.value === false) return <h4>Loading ...</h4>
          return(
              
            <Board movies = {this.state.movies}/>
            
          )
      }
}

export default Main;