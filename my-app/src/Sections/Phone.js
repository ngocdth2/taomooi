import React from 'react';
import './Phone.css';
import axios from 'axios';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import anh1 from '../images/hang.png';
import anh2 from '../images/chinh.png';
import anh3 from '../images/box.png';
import {withRouter,BrowserRouter as Router} from 'react-router-dom';
import { Headers } from '../Headers';
var data = JSON.parse(localStorage.getItem('User'))
export class Phone extends React.Component{ 
  constructor (props) {
    super(props);
    this.state = {
      Users: data ? data : [],
      products: [],
     count:0
    }
    this.changeLocation = this.changeLocation.bind(this);
  };
  ShowMoney(item){
    return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
  }
  changeLocation(link) {
    window.location=link ;
  }
  componentWillMount() {
    axios.get('http://localhost:4000/api/products')
    .then(res => {
      this.setState({products:res.data.products});
    })
   .catch(error => console.log(error)); 
   
  };
  showRating(rating){
    var result=[];
    for(var i=1; i<=rating; i++){
        result.push(<Star/>)
    }
    for(var j=1; j<=(5-rating); j++){
      result.push(<StarBorder />)
    }
    return result;
  }
  AddToCart(item){
console.log(item.soluong)
  if(item.soluong>0){
 var follow = JSON.parse(localStorage.getItem("follow")) || [];
  var a = Object.assign(item,{count: this.state.count+1})
    follow.unshift(a);
    
    var follow1 = follow.filter((item, idx, self) => follow.map(item => item.masp).indexOf(item.masp) === idx)
    if(follow1){
      if(this.state.count<item.soluong&&item.count>=1){
         this.setState({count: this.state.count+1})
      }
    }
    localStorage.setItem("follow",JSON.stringify( follow1));
    alert("Đã thêm "+ item.tensp+" vào giỏ hàng")
    window.location.reload()
  }
  else{
    alert("Sản phẩm "+ item.tensp+" đang tạm hết hàng. Vui lòng chọn sản phẩm khác")
    this.changeLocation('/')
  }
  }
  muahangngay=(item)=>{
  
    if(item.soluong>0){
      this.changeLocation(`/Hoadon/${item.masp}`)
    }
    else{
      alert("Sản phẩm "+ item.tensp+" đang tạm hết hàng. Vui lòng chọn sản phẩm khác")
    this.changeLocation('/')
    }
  }
  
    render(){
        const item = this.state.products.find(product => product.masp === +this.props.match.params.id)
        console.log(item)
        return(
          <Router>
                <div className="WapperPhone">
                  <Headers/>
                  { item ?
                   (<div className="phone">
                    <div className="title"><p><span onClick={()=> this.changeLocation(`/`)}>Trang chủ</span> /<span onClick={()=> this.changeLocation(`/Listnhacungcap/${item.mancc}`)}>{item.tenncc}</span></p>
                    <h1>Điện thoại {item.tensp} <span id="ColorRating">{this.showRating(item.rating)}</span></h1> </div>
                    <div className="content" >
                    <div className="content2">
                         <img src={item.anh} alt="anh"/>
                        
                         <p>Hình ảnh</p>
                    </div>
                    <div className="price">
                      <h1 id="">{this.ShowMoney(item.giasp)}</h1>
                     
                      <div className="khuyenmai">
                        <h3>Khuyến mãi</h3>
                        Cơ hội trúng tiền mặt, tổng trị giá lên đến 1.8 tỷ
                      </div>
                     
                        <p><input type="checkbox"/>Yêu cầu nhân viên kỹ thuật giao hàng: hỗ trợ copy danh bạ, hướng dẫn sử dụng máy mới, giải đáp thắc mắc sản phẩm.</p>
                        <button className="buttonS" onClick={()=>this.muahangngay(item)}>
                          <h3>MUA NGAY</h3>
                          <p>Giao tận nơi hoặc nhận tại siêu thị</p>
                        </button>
                        <div className="CartButton">
                          <button className="buttonS"  id="tragop" onClick={()=>this.AddToCart(item)}>
                              <h4>THÊM VÀO GIỎ HÀNG</h4>
                        </button>
                        <button className="buttonS"  id="tragop" onClick={()=>this.changeLocation(`/HoaDonTG/${item.masp}`)}>
                          <h4>MUA TRẢ GÓP 0%</h4>
                          <p>Thủ tục đơn giản</p>
                        </button>
                        </div>
                        
                        <p id="call">Gọi đặt mua: 1800.1060 (miễn phí - 7:30-22:00)</p>
                    </div>
                    <div className="chinhsach">
                      <div className="chinh">
                        <div className="mentor">
                          <div> <img src={anh3} alt="anh3"/></div>
                         
                          <div>Trong hộp có: Sạc, Tai nghe, Sách hướng dẫn, Hộp, Cây lấy sim, Ốp lưng, Cáp</div>
                        </div>
                        <div className="mentor"><img src={anh2} alt="anh2"/><span>Bảo hành chính hãng 18 tháng.</span></div>
                        <div id="cuoi" className="mentor"><img src={anh1} alt="anh1"/><span>1 đổi 1 trong 101 ngày đối với sản phẩm lỗi </span></div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="cup"></div>
                  <div className="description">
                    <div className="dacdiem">
                      <h1>Đặc điểm nổi bật của {item.tensp}</h1>
                      <img src={item.anh}s alt="anh"/>
                      <p>{item.mota}</p>
                      </div>
                    <div className="thongso">
                      <h1>Thông số kỹ thuật</h1>
                      <div className="thongso1"><div className="label3">Màn hình:</div> <div className="label2">{item.manhinh}</div></div>
                      <div className="thongso1"><div className="label3">Hệ điều hành: </div><div className="label2">{item.OS} </div></div>
                      <div className="thongso1"><div className="label3">Camera sau:</div><div className="label2">{item.cameratruoc}</div></div>
                      <div className="thongso1"> <div className="label3">Camera trước: </div><div className="label2">{item.camerasau} </div></div>
                      <div className="thongso1"> <div className="label3">CPU:</div><div className="label2">{item.CPU}</div></div>
                      <div className="thongso1"><div className="label3">RAM: </div><div className="label2">{item.RAM} </div></div>
                      <div className="thongso1"> <div className="label3">Bộ nhớ trong:</div>   <div className="label2">{item.ROM}</div></div>
                      <div className="thongso1"> <div className="label3">Dung lượng: </div>  <div className="label2">{item.dungluong}</div></div>
                    </div>
                  </div>
                  </div>) : null} 
                </div>
              </Router>
        );
    }
}
export default withRouter(Phone);