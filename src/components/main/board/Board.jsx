import React from 'react';
import Card from './card/Card';

class Board extends React.Component {

    render(){
        
        return(
            <div className="container m-5 px-3 mx-auto">
                <div className="row">
                    <Card movies = {this.props.movies}/>
                </div>

            </div>
        )
    }

}

export default Board;