import React, { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: ""
        }
    }

    componentDidMount(){
        let {id} = this.props.match.params;
        let state = this.state;
        state.id = id;
        this.setState(state);
    }

    render(){
        return(
            <h3>Product {this.state.id}</h3>
        );
    }
}

export default Product;