import React from 'react';
import { Icon } from 'semantic-ui-react';

const RightArrow = (props) => {
    return (
        <div className="nextArrow " onClick={props.goToNextSlide}>
             <Icon name='chevron right' size='big'/> 
        </div>
    )
}


export default RightArrow;