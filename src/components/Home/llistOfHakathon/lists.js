import React from 'react'
import './list.css'

const dataPara = (props)=>{

    
    return(
           <div>
            <div className='HomeDataPara' onClick={props.clicked} >
            <h3 style={{
                marginBottom:"10px"
            }} >{props.nameOfHackathon}</h3>
            <p>{props.aboutTheHackathon.slice(0,270)+" ..."}</p>
            </div>
           </div>
    )
}

export default dataPara;