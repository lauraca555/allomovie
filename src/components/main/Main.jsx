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
          if(this.state.isLoaded === false) return <h4>Loading ...</h4>
          return(
            <div className="container mt-5">
                <Board movies = {this.state.movies}/>
            </div>  
          )
      }
}

export default Main;