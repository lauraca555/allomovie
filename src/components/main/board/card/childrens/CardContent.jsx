import React from 'react';

class CardContent extends React.Component {

    render(){
        return(
            <div className="card-body">
                {/*Title*/}
                <h4 className="card-title">{this.props.title}</h4>
                {/*Text*/}
                <p className="card-text">{this.props.content}
                </p>
            </div>
        )
    }

}

export default CardContent;