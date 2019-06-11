import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Segment, Menu, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';


class Header extends React.Component {

    categories = () => {
       return this.props.categories.map(category => 
        category.title
        )

    }

    render() {
        const categories = this.categories()
        console.log('kkkk',categories)
        return (

            <Segment>
                <Menu>
                    <Menu.Item as={Link} to='/'>Home</Menu.Item>
                    <Menu.Item as={Link} to='/category'> Category
                        <Dropdown  simple text>
                            <Dropdown.Menu>
                                {
                                    this.props.categories.map(category => 
                                        <Dropdown.Item>{category.title}</Dropdown.Item>
                                        )
                                }
                               
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </Menu.Item>
                    <Menu.Item as={Link} to='/contact_us'>Contact Us</Menu.Item>
                    <Menu.Item as={Link} to='/admin'>Admin</Menu.Item>
                </Menu>
            </Segment>

        );
    }

}
const mapStateToProps = state => {
    console.log(state)
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps)(Header);