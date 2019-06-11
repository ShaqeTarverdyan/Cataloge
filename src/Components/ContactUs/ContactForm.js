import React from 'react';
import { Button, Checkbox, Input, Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actionCreator from '../../State.Management/Actions/actions';

class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.postContact(this.state);
        this.handleReset()
    }

    render() {
        return (
            <Form
                onSubmit = {this.handleSubmit}
                widths='equal'
                size='mini'
            >
                <Form.Field>
                    <Input
                        type='text'
                        name='name'
                        fluid
                        placeholder='Name'
                        style={{ marginTop: '2vw' }}
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        type='text'
                        name='email'
                        fluid
                        placeholder='Emai'
                        style={{ marginTop: '2vw' }}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        type='number'
                        name='phone'
                        fluid
                        placeholder='Phone'
                        style={{ marginTop: '2vw' }}
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>

                <Form.Field>
                    <TextArea
                        type='text'
                        name='message'
                        rows='8'
                        placeholder='Your message ...'
                        style={{ marginTop: '2vw' }}
                        value={this.state.message}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>

                <Form.Field inline>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>

                <Button inverted fluid style={{ marginTop: '2vw', background: ' #80d4ff' }}>Send</Button>
            </Form>
        )
    }

}
const mapStateToProps = state => {
    return {
        
    }
}
const mapDispatchToState = dispatch => {
    return {
        postContact:(state) => dispatch(actionCreator.postContact(state))
    }
}
export default connect(mapStateToProps,mapDispatchToState)(ContactForm);