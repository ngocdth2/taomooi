import React from 'react';
import ChooseMade from './ChooseMade';
import PhoneNB from './PhoneNB';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import PhoneDD from './PhoneDD';
export default class Artical extends React.Component{
    render(){
        return(
            <Router>
            <div id="artical">
                <ChooseMade/> 
            </div>
            <Route path="/" children={<PhoneNB/>}/>
        
            <Route path="/PhoneDD" children={<PhoneDD />} />
            </Router>    
        );
    }
}