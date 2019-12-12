import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render(){
        return (
            <h1>{this.props.product.name}</h1>
        )
    }
}

export default Product;