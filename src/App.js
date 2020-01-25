import React, { Component } from "react";
var book = require ('/Users/donovanmosley/Desktop/genesis-product/src/book_cover.png')

class App extends Component{
    render(){
        return <React.Fragment> <h1>This Page</h1>; 
        <img src={require ('/Users/donovanmosley/Desktop/genesis-product/src/book_cover.png') }/>
        <button>Test</button>
        <textarea>test</textarea>
        </React.Fragment>
    }

};

export default App;
