import React,{Component} from 'react'
class Dev extends Component {
     constructor(){
         super();
         this.state={
             value:'hello'
         }
         this.changepara = this.changepara.bind(this)
}
changepara(){
    this.setState({
        value:"welcome"
    }
    )
}
render(){
    return(
        <div>
        <p>{this.state.value}</p>
        <button onClick={this.changepara}>click here</button>
        </div>
    )
  }
}
export default Dev