import React from 'react';

class GifCard extends React.Component{
    
    getImgs(){
   
    let imgs =[];
    let img, source;
    
    for(let i=0; i < this.props.imgs.length; i++){

        img = this.props.imgs[i];
        source = img.images.preview.mp4;

        let gift = <video  autoPlay  controls loop>
                        <source src={source} type="video/mp4" />
                    </video>;
        imgs.push(<div key={img.id} className="video">{gift}</div>);
    }
    
    return imgs;
  }
    
    render(){
        
        return(
            <div className="video-container">
                {this.getImgs()}
            </div>
        )
    }

}

export default GifCard;