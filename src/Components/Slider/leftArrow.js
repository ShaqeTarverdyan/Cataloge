import React from 'react';
import { Icon } from 'semantic-ui-react';

const LeftArrrow = (props) => {
    return (
        <div className="backArrow " onClick={props.goToPrevSlide}>
             <Icon name='chevron left' size='big'/>
        </div>
    );
}



export default LeftArrrow;