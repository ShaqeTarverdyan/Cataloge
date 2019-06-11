import React from 'react';
import { Segment, Input, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../../State.Management/Actions/actions';

class AddCategory extends React.Component {
    state= {
        category:''
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.category.trim()) {
            this.props.onaddCategory(this.state);
            this.handleReset();
        }
    };
    handleReset = () => {
        this.setState({
            category:''
        })
    }
    render() {
        return (
            <Segment>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        name='category'
                        placeholder='category name'
                        onChange={this.handleInputChange}
                        value={this.state.category}
                    />
                    <Button primary>Add</Button>
                </Form>

            </Segment>
        );
    }

}
const mapStateToProps = state => {
    return {
        categories:state.categories  
    }
}
const mapDispatchToState = dispatch => {
    return {
        onaddCategory:category => dispatch(actionCreator.addCategory(category))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(AddCategory);