import React,{useState} from 'react'
import '../slider.scss'
import ImgComp from './ImgComp'
import i1 from '../pics/1.jpg'
import i2 from '../pics/2.jpg'
import i3 from '../pics/3.jpg'
// import i1 from '../pics/1.jpg'
// import i1 from '../pics/1.jpg'

const Slider = () => {
    // create an array for component to show inside slider
    let sliderArray = [
    <ImgComp src={i1} />,
    <ImgComp src={i3} />,
    <ImgComp src={i2} />
    ] 

    const [x,setX] = useState(0)

    const goLeft = () => {
        // console.log(x)
        
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        // console.log(x)
        // sliderArray.length was used so input could be dynamic
        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
    };

    return (

        <div className="slider">
            {sliderArray.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })}

                <button id="goLeft" onClick={goLeft}>
                    <i class="fas fa-chevron-left"></i>
                </button>

                <button id="goRight" onClick={goRight}>
                    <i class="fas fa-chevron-right"></i>
                </button>
        </div>

    )
}

export default Slider;
