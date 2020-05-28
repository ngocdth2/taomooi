import React from 'react';
import './PhoneNB.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
export class PhoneDD extends React.Component{ 
  constructor (props) {
    super(props);
    this.state = {
      products:[]
     
    }
    this.changeLocation = this.changeLocation.bind(this);
 
  };
  componentDidMount() {
    axios.get('http://localhost:4000/api/products')
    .then(res => {
      this.setState({products:res.data.products});
    })
   .catch(error => console.log(error));
  
  };
  changeLocation(link) {
    window.location=link ;
  }
  showRating(rating){
    var result=[];
    for(var i=1; i<=rating; i++){
        result.push(<Star/>)
    }
    for(var j=1; j<=(5-rating); j++){
      result.push(<StarBorder/>)
    }
    return result;
  }
  
 
    render(){
        return(
          <div>
            <div className="gridContainer">
                 {this.state.products.map(item=>{ 
                     var b = item.giasp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
                    return (
                     <div className="gridItem" key={item.masp}>
                        <div  onClick={()=> this.changeLocation(`/Phone/${item.masp}`)}>
                        <div className="Item" >
                          <img src={item.anh} alt="anh"/>
                         <p id="ColorRating">{this.showRating(item.rating)}</p>
                          <h3>{item.tensp}</h3>
                          <p>{b}</p>
                        </div>
                        </div>
                    </div>
                   
                 )
                 })}
                </div> 
          </div>
        );
    }
}

export default withRouter(PhoneDD)
