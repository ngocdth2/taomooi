import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import PhoneNB from './PhoneNB';
import PhoneDD from './PhoneDD';
class PhoneRouter extends React.Component {
   render() {
      return (
          <Router>
              <Route path="/" children={<PhoneNB />}/>
              <Route path="/PhoneDD" children={<PhoneDD />} />
           
          </Router>
      );
   }
}
export default PhoneRouter;