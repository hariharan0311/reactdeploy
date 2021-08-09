import React,{useState} from 'react'
function Color(){
    const [value,setvalue] = useState('hello')
    const  [input,updateinput]=useState({inputs:''})
    function changeDiv(){
     setvalue("i love u")
    }

return(
    <div>
<p>{value}</p>
<button onClick={changeDiv}>click here</button>
    </div>
)
}
export default Color