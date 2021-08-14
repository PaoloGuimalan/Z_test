import React from 'react'
import './databases_list.css';
import { useState } from 'react';
import Axios from 'axios';
import { motion } from 'framer-motion';

function Databases_list() {

    const [db_lists, setdblists] = useState([]);
    
    const getdblists = () => {
        Axios.get("http://localhost:3001/fetch").then((response) => {
             setdblists(response.data);
        });
    };

    const data_show = (id) => {
        //alert(id);
        Axios.delete(`http://localhost:3001/delete/${id}`);
    }

    getdblists();

    return (
        <div>
            <motion.table id='data_tbl'
                style={{
                    opacity: 0
                }}

                animate={{
                    opacity: 1
                }}

                transition={{
                    delay: 0,
                    duration: 1
                }}
            >
                <tbody>
                    <tr>
                        <td>
                            <h3>Database List</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           {db_lists.map((val, key) => {
                               return <motion.p
                                   style={{
                                       marginLeft: "-500px",
                                       opacity: 0
                                   }}

                                   animate={{
                                    marginLeft: "0px",
                                    opacity: 1
                                   }}

                                   transition={{
                                       duration: 1
                                   }}
                               >{val.name} <motion.button 
                               className='out_btns' 
                               data-panel={val.id} 
                               onClick={() => {data_show(val.id)}}

                                style={{
                                    opacity: 0
                                }}

                                animate={{
                                    opacity: 1
                                }}

                                transition={{
                                    duration: 3
                                }}

                               >X</motion.button></motion.p>
                           })}
                        </td>
                    </tr>
                </tbody>
            </motion.table>
        </div>
    )
}

export default Databases_list
