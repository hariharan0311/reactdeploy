import React,{Component} from 'react'
class Com extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            data:[]
        }
        this.loading=this.loading.bind(this)
        
    }
    loading(){ 
        console.log("from component did mount");
        setTimeout(() => {
            this.setState({
                loading:false,
                data:[{name:'priya'},{name:'divya'},{name:'dad little princess'},{name:'chubby girl'}]
            })
        }, 2000);
        
    }
  //  componentDidMount(){
   //     console.log("from component did mount");
   //     setTimeout(() => {
   //         this.setState({
     //           loading:false,
     //           data:[{name:'priya'},{name:'divya'},{name:'dad little princess'},{name:'chubby girl'}]
           // })
      //  }, 2000);
   // }
    render(){
        return(
            <div>
                <button onClick={this.loading }>click</button>
                {this.state.loading && <p>Loading.....</p>}
                {
                    this.state.data && this.state.data.map((obj)=>{
                        return <h1>{obj.name}</h1>
                    })
                }
            </div>
        )
    }
}
 export default Com