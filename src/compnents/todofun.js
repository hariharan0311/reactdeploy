import React,{ useState } from "react";
function List(){
    const[value,updatevalue] = useState({todolist:[]})
    const  [input,updateinput]=useState({inputs:''})
    function inputvalue(e){
        updateinput({inputs:e.target.value})
          console.log(e.target.value)  
    }
    function inputHandler(){
        var newList = {
            id:Date.now(),
            task:input.inputs,
            completed:false
        }
        updatevalue({todolist:value.todolist.concat(newList)})
        updateinput({inputs:'' })

         
}
    function strikeout(tasid){
var  updatetodo=value.todolist;
var findIndex=updatetodo.findIndex((obj)=>obj.id===tasid);
updatetodo[findIndex].completed=!updatetodo[findIndex].completed
updatevalue({todos:updatetodo})
  }
return(
<>
    <div>
<input onChange={(e)=>inputvalue(e)}
value={input.inputs}/>
<button  onClick={inputHandler}>ADDME</button>
    </div>
<div>
     {value.todolist && <div>{value.todolist.map(
         (tas,ind)=>{return(<div key={ind}><p className={tas.completed?'strike':null} 
         onClick={()=>strikeout(tas.id)}>{tas.task}</p></div>)})}</div>}
</div>
</>
)
}
export default  List;