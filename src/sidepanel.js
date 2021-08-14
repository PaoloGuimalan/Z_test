import React from 'react'
import './sidepanel.css';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

function Sidepanel({setlogout, setan2}) {

    const div1 = {
        animate: {
            height: "370px",
            width: "370px",
            fontSize: "15px"
        },
        unanimate: {
            height: "0px",
            width: "0px",
            fontSize: "0px"
        }
    }

    const div2 = {
        animate: {
            height: "350px",
            width: "350px",
            fontSize: "15px"
        },
        unanimate: {
            height: "0px",
            width: "0px",
            fontSize: "0px"
        }
    }

    var label = 'Sections';
    return (
        <motion.div className='div_side_top'
            variants={div1}
            animate={setan2 == false ? "animate" : "unanimate"}

            transition={{
                delay: setan2 == false ? 0.3 : 1,
                duration: 0.6
            }}
        >
            <motion.div className='div_side'
                variants={div2}
                animate={setan2 == false ? "animate" : "unanimate"}

                transition={{
                    delay: 0.5,
                    duration: 0.6
                }}
            >
                <header id='side_header'>
                    <motion.p id='label_title'
                        style={{
                            fontSize: "calc(5px + 2vmin)",
                            opacity: 0
                        }}

                        animate={{
                            opacity: setan2 == false ? 1 : 0
                        }}

                        transition={{
                            delay: setan2 == false ? 0.3 : 0,
                            duration: 1
                        }}
                    >{label}</motion.p>
                </header>
                <motion.table id='panel_tbl'
                    style={{
                        opacity: 0
                    }}

                    animate={{
                        opacity: setan2 == false ? 1 : 0
                    }}

                    transition={{
                        delay: setan2 == false ? 1.5 : 0,
                        duration: 1
                    }}
                >
                        <tr>
                            <td>
                                <Link to="/home" className='links'>Home</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/databases" className='links'>Databases</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/traffic" className='links'>Traffic Status</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <motion.button id="btn_logout" onClick={setlogout}
                                   whileHover={{
                                        width: "150px",
                                        background: "red",
                                        color: "white"
                                   }}

                                   transition={{
                                       duration: 0.2
                                   }}
                                >LOG OUT</motion.button>
                            </td>
                        </tr>
                </motion.table>
            </motion.div>
        </motion.div>
    )
}

export default Sidepanel
