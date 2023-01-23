import React, {useState} from 'react'
import Visualiser from './Visualiser'
import SocialIcons from './socialIcons'
import Instructions from './instructions'


export default function App() {
    const [sliderValue, setSliderValue] = useState(50)
    const [theme, setTheme] = useState('dark')
    const [instructions, setInstructions] = useState(false)

    function toggleInstructions() {
        setInstructions(prevState => !prevState)
    }

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        console.log(theme)
    }

    function adjustSlider(event) {
        setSliderValue(event.target.valueAsNumber)
        sliderValue(sliderValue)
    }

    function getBackgroundSize() {
        return {backgroundSize: `${(sliderValue * 100) / 10} % 100`}
    }

    return (
        <div>
            <Instructions
                    instructions={instructions}
                />
            <div className='top-bar'>
                
                <div className='title'>
                    <div className=" d-flex justify-content-center">Pathfinding Visualiser</div>
                </div>
                {/* <button className="theme" onClick={toggleTheme}>Toggle Theme</button> */}
                <div className="slidecontainer">                 
                    <div className='slider-text'>{`${sliderValue} ms`}</div>
                    <input className="slider speed-slider"   
                        type='range'
                        min={1}
                        max={500}
                        onChange={(event) => adjustSlider(event)}
                        sliderValue={sliderValue}
                        style={getBackgroundSize()}
                        aria-label="Small"
                        ></input>
                </div> 
            </div>
            <Visualiser
                sliderValue={sliderValue}
                theme={theme}
            />
        </div>
    )
}