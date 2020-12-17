
import React from 'react';





class CardImage extends React.Component {
    render(){
    return( 
        
    <img src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} className="card-img-top" height="350px"/>
      
     )
    }
}


    
      



export default CardImage;