import React, { Component } from 'react'
class Todo extends Component{
    constructor(){
        super();
        this.state={
            todolists:[],
            input:''
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.addTodolist = this.addTodolist.bind(this)
    }
    inputHandler(e){
      //console.log(e.target.value)  
      this.setState({
          input:e.target.value
      })
    }
    addTodolist(){
        //console.log("clicked");
        var newList = {
            id:Date.now(),
            task:this.state.input,
            completed:false
        }
        this.setState({
            todolists:this.state.todolists.concat(newList),
            input:''
        })
    }
    toggleComplete(taskId){
        var updatedlist = this.state.todolists
        var findIndex = updatedlist.findIndex((obj)=>obj.id === taskId);
        updatedlist[findIndex].completed = !updatedlist[findIndex].completed;
        this.setState({
            todolists:updatedlist
        })
    }
    render(){
        return(
            <>
            <div>
                <input onChange={(e)=>this.inputHandler(e)} value={this.state.input}/>
                <button onClick={this.addTodolist}>Add</button>
            </div>
            {
                 this.state.todolists && (
                    <div>
                        {
                            this.state.todolists.map((tasks,ind)=>{
                               return( <div key={ind}>
                                    <p className={tasks.completed?'strike':null}onClick={()=>this.toggleComplete(tasks.id)} >{tasks.task}</p>
                                </div>)
                            })
                        }
                    </div>
                 )
            }
            </>
        )
    }
}
export default Todo