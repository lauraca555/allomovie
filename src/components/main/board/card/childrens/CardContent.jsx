import React from 'react';

class CardContent extends React.Component {

    render(){
        return(
            <>
                {/*Title*/}
                <h4 className="card-title">Card title</h4>
                {/*Text*/}
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.
                </p>
            </>
        )
    }

}

export default CardContent;