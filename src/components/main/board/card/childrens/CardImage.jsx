
import React from 'react';





class CardImage extends React.Component {
    render(){
    return( 
        
    <img src={`https://image.tmdb.org/t/p/w500/${this.props.image}`}  />
      
     )
    }
}


    
      



export default CardImage;