import React from 'react';
import { Segment, Form, Button, Input,Select, TextArea } from 'semantic-ui-react';


const AddProduct  = () => {
    return (
        <Segment>
              <Form>
                {/* <Form.Field>
                //    <Select>Category</Select>
                </Form.Field> */}
                <Form.Field>
                    <Input 
                        name='name'
                        playsholder='name'
                    />
                </Form.Field>
                <Form.Field>
                    <Input 
                        name='color'
                        playsholder='color'
                    />
                </Form.Field>
                <Form.Field>
                    <Input 
                        name='size'
                        playsholder='size'
                    />
                </Form.Field>
                <Form.Field>
                    <TextArea 
                        name='description'
                        playsholder='description'
                    />
                </Form.Field>
            </Form>
        </Segment>
    );
}

export default AddProduct;