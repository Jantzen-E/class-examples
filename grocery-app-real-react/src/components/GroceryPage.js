import React from 'react';
import Product from './Product';

class GroceryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const response = await fetch('https://grocery-api347394793.herokuapp.com/api/products');
        const products = await response.json();
        this.setState({
            products: products
        })
    }
    
    render() {
        return (
            <ul>
                {this.state.products.map((product, index) => (
                    <Product key={index} product={product}/>
                ))}
            </ul>
        )
    }
};

export default GroceryPage;