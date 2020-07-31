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
            
            {/* <h1 style={{
                textAlign:"center"
            }} >HACKLT</h1>
            <h1>{props.nameOfHackathon}</h1>
            <h2>{props.startDate}</h2>
            <h3>{props.maxTeamSize}</h3>
            <p>{props.id}</p> */}
            </div>
           </div>
    )
}

export default dataPara;