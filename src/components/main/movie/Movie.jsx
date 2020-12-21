import React from 'react';
import apiMovie from '../../axios/apiMovie';
import CardImage from '../board/card/childrens/CardImage';




 
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
        <div className="container mt-5">
            <div className="d-lg-flex ">
                <div >
                    <div><CardImage image = {this.state.movie.poster_path}/></div>
                </div>
                <div className="pl-lg-5 d-flex flex-column">
                    <h1 className="mt-3">{this.state.movie.original_title}</h1>
                    <div className="text-left mb-2">Date de sortie: {this.state.movie.release_date}</div>
                    <div className="text-left mb-2">{this.state.movie.overview}</div>
                </div>
            </div>
            
            
        </div>
    ) 
   } 
}



export default Movie;