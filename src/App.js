import React from 'react';
import { Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";


import Header from './Components/Header/Header';
import Contact_Us from './Components/ContactUs/index';
import Home from './Components/Home/index';
import Category from './Components/Category/index';
import Admin from './Components/Admin/index';
import Products from './Components/Category/Products';
import ProductDescription from './Components/Category/ProductDescription';
import AddCategory from './Components/Admin/Content/AddCategory';
import AddProduct from './Components/Admin/Content/AddProduct';


function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route  path='/' exact component={Home}/>
            {/* <Route  path='/category' exact component={Category}/> */}
            <Route  path='/contact_us' exact component={Contact_Us}/>
            <Route  path='/admin' exact component={Admin}/>
            <Route  path='/:name' exact component={Products}/>
            <Route  path='/:category/:productId' exact component={ProductDescription} />
            <Route  path = '/addCategory' exact component={AddCategory}/>
            <Route  path = '/addProduct' exact component={AddProduct}/>
        </Switch>
    </Router>
  );
}

export default App;
