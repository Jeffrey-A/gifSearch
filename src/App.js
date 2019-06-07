import React from 'react';
import './App.css';
import axios from 'axios';
// import Search from './Search';
import GifCard from './GifCard';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      value:"",
      gifs:[],
      images:""
    }

    this. getImgs =  this.getImgs.bind(this);
  }
  
  handleChange =(event) =>{
    this.setState({value: event.target.value})
    
  }

  componentDidMount(){
    axios.get(' http://api.giphy.com/v1/gifs/trending?api_key=n5v0ys2kC8OaWWwSg4chpqA837dlrHZs')
        .then( (response) =>{
           console.log( response.data.data);
           
          this.setState({ gifs: response.data.data });
          
          this.setState({images: this.getImgs()});
          
         })
        .catch((error) =>{

        });

  }

  submit = (e) =>{
      e.preventDefault();
      //this.getGifs(this.state.value);
      axios.get('http://api.giphy.com/v1/gifs/search?q='+this.state.value+'&api_key=n5v0ys2kC8OaWWwSg4chpqA837dlrHZs')
        .then( (response) =>{
           console.log( response.data.data);
           
          this.setState({ gifs: response.data.data });
          
          this.setState({images: this.getImgs()});
          
         })
        .catch((error) =>{

        });
      
        
  }

  getImgs(){
   
    let imgs =[];
    let img, source;
    console.log(this.state.gifs)
    for(let i=0; i < this.state.gifs.length; i++){

        img = this.state.gifs[i];
        source = img.images.preview.mp4;

        let gift = <video width="200" height="200" autoPlay  controls loop>
                        <source src={source} type="video/mp4" />
                    </video>;
        imgs.push(<div key={img.id} className="video">{gift}</div>);
    }
    
    return imgs;
  }


  render(){
    return(
      <div>
        {/* <Search search={this.getGifs}/> */}
          <form onSubmit={this.submit}>
            <h1>Gif Search</h1>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a keyword" />
            
         </form>

          {/* <GifCard imgs={this.getImgs()} /> */}
          <div className="video-container">
             {this.state.images}
          </div>

       
      </div>
    )
  }
}

export default App;
