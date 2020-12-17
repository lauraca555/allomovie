import React from 'react';

class CardImage extends React.Component {

    
    render(){
        
        
        return(
            
            <div>
            {this.props.movies.map((m, index) => (
                <img key={index} src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt="poster" />
            ))} 
            </div>
            
        )
    }

}

export default CardImage;