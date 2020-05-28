import React from 'react';
import './App.css';
import Section from './Sections/Section';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Dangnhap from './Sign/Dangnhap';
import Dangky from './Sign/Dangky';
import { Headers } from './Headers';
import Footer from './Sections/Footer';
class App extends React.Component {

   render() {
      return (
         <Router>
         <div className="back" id="Wapp">
               <Headers/>
              <Section/>
              <Footer/>
         </div>

         <Route  path="/Dangnhap" children={<Dangnhap/>}/>
         <Route  path="/Dangky" children={<Dangky />}/>
         </Router>     
      );
   }
}
export default App;
