import React from 'react';
import './styles.css';
import { Segment ,Header} from 'semantic-ui-react'

const Slide = ({image, title}) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '30% ,100%'
    }
    return  (
        <Segment className='slide' style={styles}>
                <Header 
                    as='h4'
                    style={{fontSize:'4vw', textAlign:'center'}}
                >
                    {title}
                </Header>
        </Segment>
    )

}


export default Slide;