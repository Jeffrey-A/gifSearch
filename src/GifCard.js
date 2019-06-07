import React from 'react';

class GifCard extends React.Component{

    
    render(){
        console.log("Gif card re-rendered")
        
        return(
            <div className="video-container">
                {this.props.imgs}
            </div>
        )
    }

}

export default GifCard;