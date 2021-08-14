import React from 'react'
import './traffic_track.css'
import Axios from 'axios'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Traffic_track() {

    const [highways, sethighways] = useState([]);
    const [drop, setdrop] = useState("");
    const [segmentss, setsegments] = useState([])
    const [under, setunder] = useState([])

    const [nbst, setnb] = useState([]);
    const [sbst, setsb] = useState([]);

    const fetch_traffic = () => {
        Axios.get("http://localhost:3001/gethighways").then((response) => {
            //const output = response.data;
            //const output_res = output.traffic;
            sethighways(response.data);
            //console.log(drop);
        });
    }

    const fetch_segment = () => {
        if(drop !== "none" || drop !== "")
        {
            Axios.post(`http://localhost:3001/getsegments/${drop}`).then((response2) => {
                //var rs11 = response2.data;
                const rs1 = Object.keys(response2.data.traffic.segments);
                const rs2 = Object.values(response2.data.traffic.segments);
                const nbstatus = rs2.map((evl) => evl.status.NB.label);
                const sbstatus = rs2.map((evl) => evl.status.SB.label);
                //console.log(nbstatus, sbstatus);
                console.log(rs1);
                setsegments(rs1);
                setnb(nbstatus);
                setsb(sbstatus);
            });
        }
    }

    const fetch_traffic_d = (seg) => {
        var segg = seg;
        Axios.post(`http://localhost:3001/gettraffic`, {segments: segg, highway: drop}).then((response3) => {
                setunder(response3.data);
                console.log(under);
        });
    }


    //fetch_segment();

    fetch_traffic();

    return (
        <div id='pr_div'>
            <ul id="ul_tr">
                <li className='li_tr'>
                    <select onChange={(event) => {setdrop(event.target.value);}} onLoad={(event) => {setdrop(event.target.value);}} id='select_tr'>
                        {highways.map((val, key) => {
                            return <option value={val}>{val}</option>
                        })}
                    </select>
                </li>
                <li className='li_tr_btn'>
                    <button onClick={fetch_segment} id='btn_tr'>Show</button>
                </li>
            </ul>
            <table id='tbl_indat'>
                <div id='color_filt'>
                <tbody id='tbd_indat' style={{height: window.innerHeight+"px"}}>
                    {segmentss.map((seg, i) => {
                        return <tr className='tr_ind'>
                            <td>
                                <details className='det_m'>
                                    <summary id='det'>{seg}</summary>
                                   <p className='data_ind'>NB: <div className='nbdiv'>{nbst[i]}</div>SB: <div className='sbdiv'>{sbst[i]}</div></p>
                                </details>
                            </td>
                        </tr>
                    })}
                </tbody>
                </div>
            </table>
        </div>
    )
}

export default Traffic_track
