import React from 'react';
import Headers from '../Headers';
import './TimSP.css';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import anh3 from '../images/hinhvet.png';
export class TimSP extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[], 
        }
    }
    ShowMoney(item){
        return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
    }
    showRating=(rating)=>{
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
        Axios.get('http://localhost:4000/api/Timsptheohang/' + this.props.match.params.id)
        .then(res => {
          this.setState({products:res.data.products});
        })
       .catch(error => console.log(error)); 
      };
      changeLocation(link) {
        window.location=link ;
      }
    render(){
        const { products } = this.state;
        var a = products.length
        
        return(
            <div className="wapperTimSP">
                <div className="headerlist"><Headers /></div>
           {a>0?(<div>     
           <div className="Tongketqua"><h1>Tìm thấy {a} kết quả với từ khóa <span className="coloer">"{this.props.match.params.id}"</span></h1></div> 
                <div className="gridContainer1">    
                {products.map(item => (
                    <div className="Item1" key={item.masp} >
                       <div className="Grip-Item" onClick={()=> this.changeLocation(`/Phone/${item.masp}`)}>
                           <img src={item.anh} alt="anh"/>
                           <p id="ColorRating">{this.showRating(item.rating)}</p>
                             <h3>{item.tensp}</h3>
                            <p>{this.ShowMoney(item.giasp)}</p>
                     </div>
                    </div>))
                }</div>
                </div>):(<div  className="gridContainer11">
                    <h1>Rất tiêc không tìm thấy kết quả nào phù hợp với từ khóa "{this.props.match.params.id}"</h1>
                    <div className="ContentTimSP">
                        <img src={anh3} alt="anhlogo"/>
                        <div className="ContentChildTimSP">
                            <h2>Để tìm được kết quả chính xác hơn, bạn vui lòng</h2>
                            <ul>
                                <li>Kiểm tra lỗi chính tả trong từ khóa đã nhập</li>
                                <li>Thử lại bằng từ khóa khác</li>
                                <li>Thử lại bằng những từ khóa tổng quát hơn</li>
                                <li>Thử lại bằng những từ khóa ngắn gọn hơn</li>
                            </ul>
                        </div>
                    </div>
                </div>
                )} 
                <Footer/>

            </div>
        )
    }
}
export default withRouter(TimSP);