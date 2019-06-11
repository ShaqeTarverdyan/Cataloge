import React from 'react';
import { Segment,Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions';

class ProductDescription extends React.Component{
    componentDidMount() {
        return this.props.getProduct()
      };

    getCurrentProduct = () => {
        const productId = this.props.match.params.productId;
        const currentProduct = this.props.products.filter(product => 
            product.id === productId
            )
        return currentProduct
    }
    render() {
        const product = this.getCurrentProduct();
        return (
           <>
            {product.map(product => 
                <Card style={{width:'60vw'}}>
                    <Card.Header textAlign='center'>
                       name ---  {product.title}
                    </Card.Header>
                    <Card.Description textAlign='center'>
                       price --- ${product.price}
                    </Card.Description>
                    
                </Card>
                )}
           </>
        );
    }
    

}
const mapStateToProps = state => {
    return {
        products:state.products
    }
}
const mapDispatchToState = dispatch => {
    return {
        getProduct: () => dispatch(actionCreator.getProduct())
    }
}
export default connect(mapStateToProps,mapDispatchToState)(ProductDescription);