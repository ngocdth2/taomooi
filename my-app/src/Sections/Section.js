import React from 'react';
import '../App.css';
import ShowApp from '../SlideShow/ShowApp';
import anh1 from '../images/390-80-V2-390x80.png';
import anh2 from '../images/oppoa5-2copy-390x80.png';
import PhoneRouter from './PhoneRoter';
import {BrowserRouter as Router} from 'react-router-dom';
import ChooseMade from './ChooseMade';
class Section extends React.Component{
    render(){
        return(
           <Router>
            <section>
                <div className="header">
                    <div className="slide">
                        <ShowApp/>
                    </div>
                    <div className="img">
                        <img src={anh1} alt="anh1"/>
                        <img src={anh2} alt="anh1"/>
                    </div>
                    
                </div>  
                 <article>
                     <ChooseMade/>
                        <PhoneRouter/>
                 </article>
                
            </section>
            </Router>
        );
    }
}
export default Section;