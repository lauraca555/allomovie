import React from 'react';

class CardContent extends React.Component {

    render(){
        return(
            <div className="card-body ">
                {/*Title*/}
                <h4 className="card-title h5" style= {{ height: 40}}>{this.props.title}</h4>
            </div>
        )
    }

}

export default CardContent;