import React from 'react';
import { withRouter,Link } from 'react-router-dom';

import Axios from 'axios';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
import './Khachhang.css';
var data = JSON.parse(localStorage.getItem('User'))
class Chitiethoadon extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hoadons:[],
            chitiethoadon:[],
            Users: data ? data : [],
        }
    }
    changeLocation(link) {
        window.location=link ;
      }
    OpenHandleOK(item){
        if(this.state.Users.length!==0){
        document.getElementById(`Noidungtb${item}`).style.display='block';
       document.getElementById('Thongbaoxoa').style.display='block'
        }
        else {
            alert("Mời bạn đăng nhập")
            this.changeLocation(`/Dangnhap`)
        }
      } 
     changeHandleCancel(item){
         document.getElementById(`Noidungtb${item}`).style.display='none'
         document.getElementById('Thongbaoxoa').style.display='none'
     }
    handleDelete(item){
        console.log(item)
        const chitiethoadon={
          mahd: item.mahd,
          masp: item.masp
        };  
        console.log(chitiethoadon)
        Axios.post('http://localhost:4000/api/deletechitiethoadon', chitiethoadon)
        .then(res => {
          this.setState(prevState => ({
            chitiethoadon: prevState.chitiethoadon
          }));  
        } )
        .catch(error => console.log(error));
        window.location.reload();
      }
    componentDidMount(){
        Axios.get('http://localhost:4000/api/Selectchitiethoadon/' + this.props.match.params.id)
        .then(res => {
          this.setState({chitiethoadon:res.data.chitiethoadon});
        })
       .catch(error => console.log(error)); 
    }
      DangXuathethong=()=>{
        this.changeLocation(`/Dangnhap`) 
        localStorage.removeItem("User")
    }
    OnSumbit(){ 
        document.getElementById('Onclicksignout').style.display='block'
    }
    onClickcancel(){
      document.getElementById('Onclicksignout').style.display='none';
    }
    render(){
      console.log(this.props.match.params.id)
        const { chitiethoadon } = this.state;
      
        return(
            <div className="khachhang">
                 <div className="dropdown1">
                        <div className="Calll"><Calendar/></div>
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/Dangnhap"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                  <div className="Thongbaoxoa" id="Thongbaoxoa">
                        </div>
                        <div  onClick={this.onClickcancel}>
                <h1>Xem chi tiết hóa đơn</h1>
                <div className="wapperkhang">
                    <div className="danhsachkh">
                            <div className="makh1">Mã hóa đơn</div>
                            <div className="tenkh">Mã sản phẩm</div>
                            <div className="tenkh">số lượng</div>
                            <div className="makh"></div>
                        </div>
                    {chitiethoadon.map(item=>{
                        return(
                        <div key={item.mahd} className="khachhangds">
                            <div className="makh1">{item.mahd}</div>
                            <div className="tenkh">{item.masp}</div>
                            <div className="tenkh">{item.soluong}</div>
                            <div className="makh" id="xoakh"  onClick={()=>this.OpenHandleOK(item.mahd, item.masp)}>Xóa</div>
                            <div className="Noidungtb" id={`Noidungtb${item.mahd}`}>
                                <h3>Bạn chắc chắn muốn xóa hóa đơn có mã hóa đơn là {item.mahd} và mã sản phẩm là {item.masp}</h3>
                                <input type="submit" value="Đồng ý" onClick={()=>this.handleDelete(item)}/> 
                                <input type="submit" value="bỏ qua" onClick={()=>this.changeHandleCancel(item.mahd, item.masp)}/>
                            </div>
                        </div>
                        )
                    })}
                 </div>
               </div>
            </div>
        );
    }
}
export default withRouter(Chitiethoadon);