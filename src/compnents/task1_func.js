import React from 'react'
function Paracolor(props){

return(
    <div>
        <p style={{color:`${props.color}`}}>{props.name}</p>
    </div>
)
}

export default Paracolor