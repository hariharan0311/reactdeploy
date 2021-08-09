import axios from "axios";
import react,{Component} from "react";
class FetchData extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            data:[],
            error:""
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({
                loading:false,
                data:res.data,
                error:''
            })
        })
        .catch((err)=>{
            console.log(err)
            this.setState({
                loading:false,
                data:[],
                error:err.message
            })
        })
    }
    render(){
        return(
            <div>
            {this.state.loading && <p>Loading.....</p>}
            {
                this.state.data && this.state.data.map((user)=>{
                    return (
                        <div>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }
            {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}
export default FetchData