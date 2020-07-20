import React from 'react'
import './dataPara.css'

const dataPara = (props)=>{

    
    return(
            <div className='DataPara' onClick={props.clicked} >
            <h1 style={{
                textAlign:"center"
            }} >HACKLT</h1>
            <h1>{props.nameOfHackathon}</h1>
            <h2>{props.startDate}</h2>
            <h3>{props.maxTeamSize}</h3>
            <p>{props.id}</p>
            </div>
    )
}

export default dataPara;