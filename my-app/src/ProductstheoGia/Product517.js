import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { Headers } from '../Headers';
import ChooseMade from '../Sections/ChooseMade';
import anh1 from '../images/800-170-800x170-19.png'
import anh2 from '../images/390-80-V2-390x80.png'
import './Products02.css'
import Footer from '../Sections/Footer';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
export class Product517 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sanpham:[]
        }
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
    componentWillMount() {
        Axios.get('http://localhost:4000/api/selectsanphamtu7den15')
        .then(res => {
          this.setState({sanpham:res.data.sanpham});
        })
       .catch(error => console.log(error)); 
       
      };
      changeLocation(link) {
        window.location=link ;
      }
    render(){
        return(
            <div className="WapperPS02">
                <div className="headerps02"><Headers/></div>
                <div className="choosemade1"><ChooseMade/></div>
                <div className="wapperanh"><img src={anh1} id="anh1" alt="anh1"/><img src={anh2} id="anh2" alt="anh2"/></div>
                <div className="listPs02">
                    {this.state.sanpham.map(item => {
                         var b = item.giasp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
                        return (
                        <div  className="Item1" key={item.masp}>
                            <div className="Grip-Item" onClick={()=> this.changeLocation(`/Phone/${item.masp}`)}>
                                <img src={item.anh} alt="anh"/>
                                <p id="ColorRating">{this.showRating(item.rating)}</p>
                                <h3>{item.tensp}</h3>
                                <p>{b}</p>
                            </div>
                            
                        </div>
                        )
                    })}
                </div>
               <Footer/>
            </div>
        )
    }
}
export default withRouter(Product517)