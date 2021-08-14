import React from 'react'
import './main_content.css';
import logo from './imgs/Z.png';
import {motion} from 'framer-motion';
import {useState} from 'react';

function Main_content({setcom1}) {

    const [grapimg, setgrap] = useState(false)

    const renderer = {
        animate: {
            width: grapimg == true ? "300px" : "150px",
            height: grapimg == true ? "300px" : "150px",
            opacity: 1
        },
        unanimate: {
            width: "0px",
            height: "0px",
            opacity: 0
        }
    }

    return (
        <div id='main'>
            <motion.img 
            variants={renderer}
            animate={setcom1 == false ? "animate" : "unanimate"}

            transition={{
                 duration: 1
            }}
            src={logo} id='img_container' alt='Logo' onClick={() => {grapimg == false ? setgrap(true): setgrap(false)}}/>
        </div>
    )
}

export default Main_content
