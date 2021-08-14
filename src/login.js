import React from 'react'
import './login.css'
import { useState } from 'react';
import App from './App';
import SidePanel from './sidepanel.js';
import Main from './main_content.js';
import Databases from './databases_list.js';
import Inputs from './inputs.js';
import Traffic_track from './traffic_track';
import {BrowserRouter as Router, Route} from 'react-router-dom';  
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { motion } from 'framer-motion';


function Login() {

    const cookies = new Cookies();

    const [num, setNum] = useState(0);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [lists, setAccounts] = useState([]);

    const [setteran, setsetteran] = useState(false)

    //stateframer
        
    const [w1state, setw1] = useState(false);
    const [w1warn, setw1warn] = useState("");

    const [log, setlog] = useState(false)
    
    //stateframer

    const handlerRemove = () => {
        //cookies.remove("id");
        setsetteran(true);
        setTimeout(() => {
            setEmail("");
            setPass("");
            setAccounts([]);
            setNum(0);
            setlog(false);
        }, 3000);
        //console.log(cookies.id);
        //console.log(lists.map((list) => list.email));
        //console.log(num);
    }

    const process = () => {
        //console.log(email+" "+pass);
        Axios.post("http://localhost:3001/login", {
            email: email, 
            pass: pass,
        }).then((response) => {
            setAccounts(response.data);
            console.log(response.data);
            const dat = response.data;
            const dat2 = dat.map((load) => load.id);

            if(document.getElementById('pass').value == "" && document.getElementById('email').value == "" || document.getElementById('pass').value == null && document.getElementById('email').value == null)
            {
                setw1(true);
                setw1warn("All fields are Empty!");
            }
            else if(dat2.length === 0)
            {
                if(document.getElementById('email').value == "" || document.getElementById('email').value == null)
                {
                    setw1(true);
                    setw1warn("Empty Email!");
                }
                else if(document.getElementById('pass').value == "" || document.getElementById('pass').value == null)
                {
                    setw1(true);
                    setw1warn("Empty Password!");
                }
                else
                {
                    setw1(true);
                    setw1warn("Failed to Log In!");
                }
            }
            //console.log(dat2);
            //cookies.set("id", dat2, { path: '/' });
            //console.log(cookies.get("id"));

            var reso = response.data.length;
            if(reso === 1)
            {
                setlog(true);
                setTimeout(() => {
                    setNum(reso);
                    setsetteran(false);
                }, 2500);;
            }
            else
            {
                setNum(reso);
            }
        });
    }

    const frames = {
        animate: {
             height: "400px",
             width: "400px"
        },
        unanimate: {
             height: "0px",
             width: "0px"
        }
    }

    //framers

    const Warn = () => {
        return (
            <motion.div id='div_warn'
               variants = {frames}
               animate={w1state == false ? "unanimate" : "animate"}
               
               transition={{
                   delay: 0,
                   duration: 0.5,
                   type: "spring",
                   bounce: 0.5
               }}

               onClick={() => {setw1(false)}}
            >
                  <table id='warn_tbl'>
                      <tbody>
                          <tr>
                              <td>
                                 <p id='warn_label'>{w1warn}</p>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                 <p id='warn_label_un'>Click to remove notification</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
            </motion.div>
        )
    }

    const div1 = {
        animate: {
            width: "780px",
            height: "665px"
        },
        unanimate: {
            width: "0px",
            height: "0px"
        }
    }

    const div2 = {
        animate: {
            width: "700px",
            height: "600px"
        }
    }

    const div3 = {
        animate: {
            width: "620px",
            height: "535px"
        }
    }


        return (
            <div style={{height: '100%'}}>
                {(num == null || num === 0) ? (
                 <ul id='ul_frames'>
                     <li className="li_frames">
                     <motion.div id='div_f'
                        variants={div1}
                        animate={log == false ? "animate" : "unanimate"}

                        transition={{
                                delay: 0.5,
                                duration: 1
                        }}
                        >
                            <motion.div id='div_s'
                                variants={div2}
                                animate={log == false ? "animate" : "unanimate"}

                                transition={{
                                    delay: 0.8,
                                    duration: 1
                                }}
                            >
                                <motion.div id='div_t'
                                    variants={div3}
                                    animate={log == false ? "animate" : "unanimate"}

                                    transition={{
                                        delay: 1.2,
                                        duration: 1
                                    }}
                                >
                                    <motion.table id='login_tbl'
                                        animate={{
                                            opacity: log == false ? 1 : 0
                                        }}

                                        transition={{
                                            delay: log == false ? 2 : 0,
                                            duration: 1
                                        }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h3>LOG IN</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <motion.input 
                                                whileHover={{
                                                    scale: 1.1
                                                }}
                                                
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.8
                                                }}
                                                type='text' id='email' name='email' className='fields' placeholder='Email' onChange={(event) => {setEmail(event.target.value)}}></motion.input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <motion.input 
                                                whileHover={{
                                                    scale: 1.1,
                                                }}

                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.8
                                                }}
                                                type='password' id='pass' name='email' className='fields' placeholder='Password' onChange={(event) => {setPass(event.target.value)}}></motion.input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <motion.button 
                                                whileHover={{
                                                    background: "aqua",
                                                    color: "black"
                                                }} 

                                                transition={{
                                                    duration: 3
                                                }}
                                                id='btn_log' onClick={process}>LOG IN</motion.button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </motion.table>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                     </li>
                     <li className="li_frames">
                         <Warn />
                     </li>
                 </ul>
                ) : (
                <Router>
                    <ul>
                        <li id='side_li'>
                            <SidePanel setlogout={() => {handlerRemove()}} setan2={setteran}/>
                        </li>
                        <li id='app_li'>
                            <App setan1={setteran}/>
                            <Route path='/home' render={props=><Main setcom1={setteran}/>} />
                            <Route path='/databases' component={Databases} />
                            <Route path='/databases' component={Inputs} />
                            <Route path='/traffic' component={Traffic_track} />
                        </li>
                    </ul>
                </Router>
                )}
            </div>
        )
}

export default Login
