import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { Headers } from '../Headers';
import ChooseMade from './ChooseMade';
import './Listnhacungcap.css';
import Footer from './Footer';
import anh1 from '../images/800-170-800x170-19.png'
import anh2 from '../images/390-80-V2-390x80.png'
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
export class Listnhacungcap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nhacungcaps:[],
            products:[]
        }
        this.changeLocation=this.changeLocation.bind(this)
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
    componentDidMount(){
        Axios.get('http://localhost:4000/api/sptheohang/' + this.props.match.params.id)
        .then(res => {
          this.setState({ products:res.data.products});
        })
       .catch(error => console.log(error)); 
    }
    changeLocation(link) {
        window.location=link ;
      }
      ShowMoney(item){

        return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
      }
    render(){
        const { products } = this.state;
       console.log(products)
     
        return(
            <div className="wapperlisst">
                <div className="headerlist"><Headers/></div>
                <div className="choosemade"><ChooseMade/></div>
                <div className="wapperanh"><img src={anh1} id="anh1" alt="anh1"/><img src={anh2} id="anh2" alt="anh2"/></div>
               {products.tenncc}
                <div className="gridContainer1">
                {
                    products.map(item => (
                     
                    <div className="Item1" key={item.masp} >
                       <div className="Grip-Item" onClick={()=> this.changeLocation(`/Phone/${item.masp}`)}>
                           <img src={item.anh} alt="anh"/>
                           <p id="ColorRating">{this.showRating(item.rating)}</p>
                             <h3>{item.tensp}</h3>
                            <p>{this.ShowMoney(item.giasp)}</p>
                     </div>
                    </div>))
                }</div>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(Listnhacungcap);