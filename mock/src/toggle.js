import React, { Component } from 'react';

class toggle extends React.Component {
    constructor(){
        super();
        this.state={
            text:"",
            boolean: true,
            emp:""
        };
    }
    
    handleOnchange=(e)=>{
        this.setState({text:e.target.value});
        console.log(this.state);
    }

    handleSubmit=(e)=>{
        console.log(this.state.boolean);
        this.setState({boolean:!this.state.boolean})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.handleOnchange(e)} value={this.state.boolean?this.state.text:this.state.emp}/>
                <button onClick={(e)=>this.handleSubmit(e)}>Click</button>            
            </div>
        );
    }
}

export default toggle;
