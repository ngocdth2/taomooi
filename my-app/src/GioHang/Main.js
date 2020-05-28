import React from 'react';
import CartItem from './CartItem';
import { withRouter } from 'react-router-dom';
import { Headers } from '../Headers';

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <Headers/>
                
            </div>
        )
    }
}

export default withRouter(Main);