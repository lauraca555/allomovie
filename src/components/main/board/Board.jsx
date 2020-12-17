import React from 'react';
import Card from './card/Card';

class Board extends React.Component {

    render(){
        
        return(
            <div className="row">
                
                <Card movies = {this.props.movies}/>
                                
            </div>
        )
    }

}

export default Board;