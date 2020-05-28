import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import React from 'react';
import './Hoadon';
import { withRouter } from 'react-router-dom';
class Dieuchinhsl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 1
            
        }
        this.Tang =this.Tang.bind(this);
        this.onChangeCount =this.onChangeCount.bind(this);
        this.Giam = this.Giam.bind(this);
    }
    onChangeCount(e){
        this.setState({count: e.target.value})
    }
    Tang(){
        this.setState({count: this.state.count+1})
    }
    Giam(){
        if(this.state.count>1){
            document.getElementById('giam').style.color="black"
            this.setState({count: this.state.count-1})
        }
        if(this.state.count===2){
            document.getElementById('giam').style.color="#DCDCDC"  
       }
       
       console.log(this.state.count)
    }
    render(){
        if(this.state.count>1){
            document.getElementById('giam').style.color="black"  
        }
        
        return(
            <div className="dieuchinh">
                <div className="giam" onClick={this.Giam} ><Remove id="giam"/></div>
                <div><input type="text" value={this.state.count} onChange={this.onChangeCount}/></div>
                <div className="tang" onClick={this.Tang}><Add/></div>
            </div>
        );
    }
}
export default withRouter(Dieuchinhsl);