import React from 'react';
import CardButton from './childrens/CardButton';
import CardContent from './childrens/CardContent';
import CardImage from './childrens/CardImage';

const carte = {
    urlImage : "https://fakeimg.pl/350x200/?text=Hello",
    title : "la belle et la bête",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio nibh, porta vitae suscipit et, interdum non urna. Phasellus a eros vel arcu vehicula finibus eu dignissim risus. Aliquam porta interdum eleifend.",
    urlButton : ""

}

class Card extends React.Component {
    
    render(){
        const {urlImage, title, content, urlButton} = carte ;
        const iteration = this.props.movies.length;
        console.log(iteration);
        return(
            
               
               <div className="col-md-6 col-lg-4 col-xl-3 mb-3">   
                    <div className="card">
                        {/*Card image*/}
                        <div className="view">
                        <CardImage image = {urlImage}/>
                        </div> 
                        {/*Card content*/} 
                        <div className="card-body p-0">
                            <CardContent title= {title} content = {content}/>
                        </div>
                        {/*Card button*/}
                        <CardButton movies = {urlButton}/>  
                    </div>
                </div>
                                                       
               
            
           
        )
    }
}

export default Card;