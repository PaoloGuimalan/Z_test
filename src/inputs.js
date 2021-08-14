import React from 'react'
import './inputs.css';
import { useState } from 'react';
import Axios from 'axios';

function Inputs() {

    const [name, setName] = useState("");

    const display = () => {
         Axios.post("http://localhost:3001/create", {
            db_name: name,
         }).then(() => {
             //Databases_list(getdblists);
             clear();
         });
    };

    const clear = () => {
          var cls = document.getElementById("input_id");
          cls.value = '';
    };

    return (
        <div id='div_input'>
            <ul id='input_ul'>
                <li>
                    <table id='tbl_input'>
                        <tbody>
                            <tr>
                                <td>
                                    <p id='p_id'>Database Name</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type='text' name='database_name' id='input_id' onChange={(event) => {setName(event.target.value);}}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button id='sub_det' onClick={display}>Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </div>
    )
}

export default Inputs
