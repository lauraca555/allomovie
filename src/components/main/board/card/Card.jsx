import React from 'react';
import CardButton from './childrens/CardButton';
import CardContent from './childrens/CardContent';
import CardImage from './childrens/CardImage';

class Card extends React.Component {

    render(){
        return(
            <div className="col-lg-4 col-md-12">
                {/*Card*/}
                <div className="card">
                    {/*Card image*/}
                    <div className="view">
                    <CardImage movies = {this.props.movies}/>
                    </div> 
                    {/*Card content*/} 
                    <div className="card-body">
                        <CardContent movies = {this.props.movies}/>
                    </div>
                    {/*Card button*/}
                    <CardButton movies = {this.props.movies}/>
                </div>
                        
            </div>
           
        )
    }
}

export default Card;