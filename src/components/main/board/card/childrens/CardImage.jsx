
import React from 'react';





class CardImage extends React.Component {
    render(props){
    return( 
        
        <p><img src={this.props.image} className="card-img-top"/></p>
      
     )
    }
}


    
      



export default CardImage;