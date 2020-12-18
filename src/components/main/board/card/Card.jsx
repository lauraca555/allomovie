import React from 'react';
import CardButton from './childrens/CardButton';
import CardContent from './childrens/CardContent';
import CardImage from './childrens/CardImage';





 
const Card = (props) => (
    
        <>    
        {props.movies.map((movie, index) =>(
            <div className="col-md-6 col-lg-4 col-xl-3 mb-3" key={index}>
                <div className="card" >    
                    {<CardImage image = {movie.poster_path}/>}
                    {<CardContent title = {movie.title} />}
                    {<CardButton/>}
                </div>
            </div>  
        ))}
        </>        
    
    
                               
        )
       



export default Card;