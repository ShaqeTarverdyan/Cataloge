import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import Categories from './Categories';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Category extends  React.Component {
    render() {
        return (
            <div>
                <Card.Group itemsPerRow='3' style={{padding:'3vw'}}>
                    {
                        this.props.categories.map((category, i) => {
                           return (
                            <Link to={category.title}>
                            <Categories title={category.title} key={i}/>
                            </Link>
                           )
                        })
                    }
                </Card.Group>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        categories:state.categories
    }
}
export default connect(mapStateToProps)(Category);
