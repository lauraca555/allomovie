import React from 'react';
import apiMovie from '../../axios/apiMovie';




 
class Movie extends React.Component{
   
   constructor(props){
      super(props);
      this.state = {
          isLoaded : false,
            
          
          
      }
    }
  
    componentDidMount() {
        const idMovie = this.props.location.pathname.replace('/movie/','');
        apiMovie.get(`/movie/${idMovie}`)
                .then((response) => {
                      
                      this.setState({
                          movie : response.data, 
                          isLoaded:true,
                                                      
                      })
                })  
                .catch((error) => {
                      console.log(error);
                })
  
    }
   
  
   render(){
      
      
      console.log(this.state);
      if(this.state.isLoaded === false) return <h4>Loading ...</h4>;
      
      
     
 
      return(
        <h1>{this.state.movie.original_title}</h1>
    ) 
   } 
}



export default Movie;