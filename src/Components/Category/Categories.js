import React from 'react';
import { Segment,Card } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Categories = ({title}) => {
    return (
        <>
        <Segment style={{margin:'2vw'}}> 
            <Card 
                header={title}
                style={{margin:'2vw'}}
            />
           
        </Segment>
        
         </>
    )
}

export default Categories;