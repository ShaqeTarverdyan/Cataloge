import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';

const AdminMain = () => {

    return (
        <Router>
            <Segment>

                <Link to='/addCategory'>
                    <PeopleListCover />
                </Link>
                <br />
                <Link to='/addProduct'>
                    <PeopleAddCover />
                </Link>

            </Segment>
            <Switch>
                <Route path='/addCategory' component={AddCategory} />
                <Route path='/addProduct' component={AddProduct} />
            </Switch>
        </Router>


    );
}



const PeopleListCover = () => {
    return (
        <Segment>
            Add Category
        </Segment>
    );
}


const PeopleAddCover = () => {
    return (
        <Segment>
            Add  product
        </Segment>
    );
}

export default AdminMain;