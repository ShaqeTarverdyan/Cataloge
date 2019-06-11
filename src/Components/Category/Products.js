import React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import * as actionCreator from '../../State.Management/Actions/actions';
import ProductDescription from './ProductDescription';

class Products extends React.Component {
    componentDidMount() {
      return this.props.getProduct()
    }
    getCategory = () => {
        const categoryName = this.props.match.params.name;
        const currentCategory = this.props.categories.filter(category =>
            category.title === categoryName
        );
        const categoryname = currentCategory[0].title;
        return categoryname;
    }
    currentCategoryId = () => {
        const categoryName = this.props.match.params.name;
        const currentCategory = this.props.categories.filter(category =>
            category.title === categoryName
        );
        const categoryId = parseInt(currentCategory[0].id);
        const curProductList = this.props.products.filter(product =>
            product.categories.includes(categoryId)
        )
        return curProductList;

    }
    render() {
        const category = this.getCategory();
        const product = this.currentCategoryId();
        return (
            <>
                {
                    product.map(prod => (
                        <NavLink to={`/`+category+`/` + prod.id}>
                            <Card style={{ margin: '2vw', listStyleType: 'none', textAlign: 'center' }}>
                                <li>id - - <strong>{prod.id}</strong></li>
                                <li>title - -<strong>{prod.title}</strong></li>
                                <li>categories - -<strong>{prod.categories.join(',')}</strong></li>
                                <li>price - -<strong>{prod.price}</strong></li>
                            </Card>
                        </NavLink>
                    ))

                }
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        products: state.products
    }
}
const mapDispatchToState = dispatch => {
    return {
        getProduct: () => dispatch(actionCreator.getProduct())
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Products);  