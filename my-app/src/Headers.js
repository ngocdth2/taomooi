import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';
import anh1 from './images/wTQSAZ8.png';
import Bookmarks from '@material-ui/icons/Bookmark';
import Group from '@material-ui/icons/Group';
import Search from '@material-ui/icons/Search';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
var data = JSON.parse(localStorage.getItem('follow'))
export class Headers extends React.Component{ 
  constructor (props) {
    super(props);
    this.state = {
      products:[],
      tensp:'',
      Giohang: data ? data : [],
    }
    this.changeLocation = this.changeLocation.bind(this);
    this.SubmitSelect=this.SubmitSelect.bind(this)
    this.OnchangeVlue=this.OnchangeVlue.bind(this)
  };
  changeLocation(link) {
    window.location=link ;
  }
 
SubmitSelect(){
  if(this.state.tensp!==""){
    this.changeLocation(`/TimSP/${this.state.tensp}`)
  }
  else{
     alert("Mời quý khách nhập tên sản phẩm cần tìm")
  }
}
OnchangeVlue(e){
  this.setState({tensp: e.target.value})
}
    render(){    
      let a = this.state.Giohang.length
        return(
                  <div className="wapperheader">
                    <div className="logoHeader">
                        <img src={anh1} alt="anhlogo" onClick={()=> this.changeLocation(`/`)}/>
                    </div>
                 <div className="botHeader">
                   <div className="headerSearch">
                      <input type="text" placeholder="Bạn tên sản phẩm bạn cần tìm...." value={this.state.tensp} onChange={this.OnchangeVlue}/>
                      <div className="IconSearch"  onClick={()=> this.changeLocation(`/TimSP/${this.state.tensp}`)}><p><Search/></p></div>
                   </div>
                   
                <div className="sign">
                  <div className="Tuychon" id="tuychonhay">
                    <p className="chone" ><Bookmarks className="logoicon" /></p>
                    <p>Thông tin hay</p>
                    <ul className="thongtinhay">
                      <li>Tin Mới</li>
                      <li>Khuyến mãi</li>
                      <li>Sự kiện</li>
                      <li>Đánh giá</li>
                      <li>Tư vấn</li>
                    </ul>
                  </div>
                  <div className="Tuychon" onClick={()=>this.changeLocation(`/Cart`)}>
                    <div className="WapCartLengt">
                        <p className="IconCartLength"><AddShoppingCart className="logoicon" /></p>
                        {a>0?(<p className="numberCartLength">{JSON.parse(localStorage.getItem('follow')).length} </p>):null}
                    </div>
      
                    <p>Giỏ hàng</p>
                  </div>
                  <div className="Tuychon" onClick={()=> this.changeLocation(`/Dangnhap`)}>
                    <p><Group/></p>
                    <p>Đăng nhập</p>
                  
                  </div>
                    
                </div>
            </div>
            </div>
              
        );
    }
}

export default withRouter(Headers);