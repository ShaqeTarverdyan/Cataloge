import React from 'react';
import { Segment} from 'semantic-ui-react'
import Slide from './slide';
import RightArrow from './rightArrow';
import LeftArrrow from './leftArrow';
import './styles.css';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: [],
            currentIndex: 0,
            translateValue: 0
        }
    }
    componentDidMount() {
        fetch('https://www.magento.am/api/slider.php')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    slider: data
                })
            )
    }
    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {
           return ;
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
       
        this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
    }))
    }

goToNextSlide = () => {
    console.log('zzz',this.state.slider)
    const sliderImages = this.state.slider.map(item => (
        console.log('pppp',item)
    ))
    if (this.state.currentIndex === sliderImages.length - 1) {
        return this.setState({
            currentIndex: 0,
            translateValue: 0
        })
    }
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue  -(this.slideWidth())
    }))
}
slideWidth = () => {
   return document.querySelector('.slide').clientWidth;
}
render() {
    return (
        <div className='slider'>

            <div className='slider-wrapper'
                style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 1s'
                }}>
                {
                    this.state.slider.map((item, i) => (
                        <Slide key={i} image={item.image}  title={item.title}/>
                    ))
                }
            </div>
            <LeftArrrow goToPrevSlide={this.goToPrevSlide} />
            <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>

    );
}
}

export default Slider;