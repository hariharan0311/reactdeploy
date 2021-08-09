import React,{Component} from 'react'
import Paracolor from './task1_func'
class Task extends Component {
     constructor(){
        super();
        this.state={
            color:'black',
            txt: "The binary + operator casts both operands to a string unless both operands are numbers. This is because the addition operator doubles as a concatenation operator The binary - operator always casts both operands to a numberBoth unary operators (+, -) always cast the operand to a number" 
        }
        this.changecolor=this.changecolor.bind(this)
    }
    changecolor(){
        this.setState({color:'red'})
        
    }
        render(){  
            return(
                <div>
                    <Paracolor name={this.state.txt} color={this.state.color}/>
                <button onClick={this.changecolor}>Next</button>
                </div>
            )
        }
    }
export default Task
