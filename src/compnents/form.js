import React,{ Component } from "react";
class Formlist extends Component{
    constructor(){
        super();
        this.state={
            D_name:'',
            D_DOB:'',
            D_department:'',
            D_course:'',
            D_Address:'',
            D_mobileno:'',
}
this.submit=this.submit.bind(this)
    }
    studname(e){
        this.setState({
           [e.target.name]:e.target.value 
        })
    }
    submit(){
        var a =this.state
        var b = "" ; var hag ='true'
        for(var check in a)
        {
            if(a[check]=="")
            {
                alert(check  +" is empty")
                hag='false'
                break; 
            }
            else{
                b += a[check]
            }
        }
        hag == 'true' && alert(b)
    }
render(){
    return(
        <>
        <label>student form</label><br></br>
        <label>name</label><input name='D_name' onChange={(e)=>this.studname(e)} value={this.state.D_name}></input><br></br>
        <label>Dob</label><input name='D_DOB' onChange={(e)=>this.studname(e)} value={this.state.D_DOB}></input><br></br>
        <label>department</label><input name='D_department' onChange={(e)=>this.studname(e)} value={this.state.D_deparment}></input><br></br>
        <label>course</label><input name='D_course' type ='radio' onChange={(e)=>this.studname(e)} value='bca'></input><label>bca</label><br></br>
        <input name='D_course' type ='radio' onChange={(e)=>this.studname(e)} value='bsc'></input><label>bsc</label><br></br>
        <label>address</label><input name='D_Address' onChange={(e)=>this.studname(e)} value={this.state.D_Address}></input><br></br>
        <label>mobileno</label><input name='D_mobileno' onChange={(e)=>this.studname(e)} value={this.state.D_mobileno}></input><br></br>
        <button onClick={this.submit}>submit</button>
        </>
    )
}
}
export default Formlist