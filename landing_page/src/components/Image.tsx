import pog_final from '../assets/pog_final.png';
import './components.css'

import React from 'react';
import { Typewriter} from "react-simple-typewriter";
import { pickRandomPhrase } from '../util/phrases.ts';


// Types
type ImageProps = {
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}


// Component
function Image( { onClick } : ImageProps) {
    return (
        <div className="image-container">
            <img src={pog_final} onClick={onClick} alt="Pog"/>
            <div className="text">
                <p>&gt; <Typewriter
                    words={pickRandomPhrase()}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></p>
            </div>
        </div>
    );
}

export default Image;