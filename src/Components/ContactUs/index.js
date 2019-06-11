import React from 'react';
import { Segment,Header } from 'semantic-ui-react';
import ContactForm from './ContactForm';

const Contact_Us = () => {
    return (
        <Segment.Group  
            style={{
                width:'100%',
                alignItems:'center',
                
            }}
        >
            <Segment  textAlign='center'  >
                <Header 
                    as='h4' 
                    style={{fontSize:'5vw', fontFamily:'"Courier New", Courier, monospace', color:'#686868'}} 
                > 
                    Contact Us</Header>
            </Segment>
            <Segment 
                clearing 
                stacked 
                tertiary 
                secondary 
                raised 
                padded='very'
                size='big'
                textAlign='center'
                style={{width:'80%', marginLeft:'10%'}}
            >
                <ContactForm />
            </Segment>
        </Segment.Group>

    )
}

export default Contact_Us;