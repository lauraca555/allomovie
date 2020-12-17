import React from 'react';
import Card from './card/Card';

class Board extends React.Component {

    render(){
        
        return(
            <div className="row my-3">
                
                <Card movies = {this.props.movies}/>
                <Card movies = {this.props.movies}/>
                <Card movies = {this.props.movies}/>
                <Card movies = {this.props.movies}/>
                <Card movies = {this.props.movies}/>
                <Card movies = {this.props.movies}/>
                <Card movies = {this.props.movies}/>
                <Card movies = {this.props.movies}/>
                
            </div>
        )
    }

}

export default Board;