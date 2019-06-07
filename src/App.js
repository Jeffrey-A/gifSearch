import React from 'react';
import './App.css';
import axios from 'axios';
import Search from './Search';
import GifCard from './GifCard';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      gifs:[]
      
    }

  }
  
  //get trending images and update state
  componentDidMount(){
    axios.get(' http://api.giphy.com/v1/gifs/trending?api_key=n5v0ys2kC8OaWWwSg4chpqA837dlrHZs')
        .then( (response) =>{
           console.log( response.data.data);
           
          this.setState({ gifs: response.data.data });
         })
        .catch((error) =>{
          console.log(error);
        });

  }

  //get images base in  keyword and update state
  getGifs = (keyword) =>{
      
      let item = keyword.toLowerCase();
      axios.get('http://api.giphy.com/v1/gifs/search?q='+item+'&api_key=n5v0ys2kC8OaWWwSg4chpqA837dlrHZs')
        .then( (response) =>{
           console.log( response.data.data);
           
          this.setState({ gifs: response.data.data });
  
         })
        .catch((error) =>{
            console.log(error);
        });
      
        
  }


  render(){
    return(
      <div>
        <Search search={this.getGifs}/>
        <GifCard imgs={this.state.gifs} />
      </div>
    )
  }
}

export default App;
