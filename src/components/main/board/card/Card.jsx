import React from 'react';
import { Link } from 'react-router-dom';
import CardContent from './childrens/CardContent';
import CardImage from './childrens/CardImage';




class Card extends React.Component {
  

  render(){
      const movie = this.props.movies;  
      return(
        movie.map((movie, index) =>(
                    
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-3" key={index}>
                        <div className="card" >    
                            <CardImage image = {movie.poster_path}/>
                            <CardContent title = {movie.title} />
                            <Link to={`/movie/${movie.id}`}><button type="button" className="btn btn-info mx-5 mb-3">Page</button></Link>
                        </div>
                    </div>  
                ))
      )
  }  
}
 

       



export default Card;