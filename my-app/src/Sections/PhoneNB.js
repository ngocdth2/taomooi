import React from 'react';
import './PhoneNB.css';
import { withRouter} from 'react-router-dom';
import PhoneDD from './PhoneDD';
export class PhoneNB extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
   
    render(){
        return(
            <div id="" className="hotPhone">
                <div id="NBP"> 
                <h1 >ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
                    <div className="hotPhone" id="phonkmhot">
                     <div id="phoneNb"><PhoneDD/></div>
                    
                    </div>
               </div>
                
            </div>
        );
    }
}
export default withRouter(PhoneNB)