import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:"",
            gifs: ''
          }
    }

    handleChange =(event) =>{
        this.setState({value: event.target.value})
       
    }

    submit = (e) =>{
        e.preventDefault();
        this.props.search(this.state.value);
        
    }

    

    render(){

        return(
        <form onSubmit={this.submit}>
            <h1>Gif Search</h1>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a keyword" />
      </form>
        )
    }
}

export default Search;