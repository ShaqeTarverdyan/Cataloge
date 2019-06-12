import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Segment, Menu, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';


class Header extends React.Component {
    render() {
        return (
            <Segment>
                <Menu borderless>
                    <Menu.Item  stackable as={Link} to='/'>Home</Menu.Item>
                    <Menu.Item >
                        <Dropdown  
                            style={{zIndex:'999'}}
                            simple
                            pointing
                            text='Category'                             
                            closeOnBlur
                        >
                            <Dropdown.Menu>
                                {
                                    this.props.categories.map(category =>
                                        <Link to={category.title}>
                                            <Dropdown.Item 
                                                 style={{width:"10vw", marginTop:"2vw"}}
                                            >
                                                {category.title}
                                            </Dropdown.Item>
                                        </Link>
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