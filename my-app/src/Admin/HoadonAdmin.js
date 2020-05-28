import React from 'react';
import { withRouter ,Link} from 'react-router-dom';
import Axios from 'axios';
import './Khachhang.css';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
var data = JSON.parse(localStorage.getItem('User'))
class HoadonAdmin extends React.Component{
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
        const hoadon={
          mahd: item.mahd,
          masp: item.masp
        };  
        Axios.post('http://localhost:4000/api/deletehoadon', hoadon)
        .then(res => {
          this.setState(prevState => ({
            hoadons: prevState.hoadons
          }));  
        } )
        .catch(error => console.log(error));
        window.location.reload();
      }
    componentDidMount(){
        Axios.get('http://localhost:4000/api/hoadon')
        .then(res=>{
            this.setState({ hoadons: res.data.hoadons })
        })
        .catch(error=>console.log(error))
       
    }
    OnSumbit(){ 
        document.getElementById('Onclicksignout').style.display='block'
    }
    onClickcancel(){
      document.getElementById('Onclicksignout').style.display='none';
    }
    ShowMoney(item){
        return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
      }
      DangXuathethong=()=>{
        this.changeLocation(`/Dangnhap`) 
        localStorage.removeItem("User")
    }
    render(){
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
                   <div className="KHlist" onClick={this.onClickcancel}>
                <h1>Danh sách hóa đơn</h1>
                <div className="wapperkhang">
                    <div className="danhsachkh">
                            <div className="makh1">Mã hóa đơn</div>
                            <div className="tenkh">Mã khách hàng</div>
                            <div className="tenkh">Ngày tạo</div>
                            <div className="quequan1">Tổng tiền</div>
                            <div className="xemchitiet"></div>
                            <div className="makh"></div>
                        </div>
                    {this.state.hoadons.map(item=>{
                        return(
                        <div key={item.mahd} className="khachhangds">
                            <div className="makh1">{item.mahd}</div>
                            <div className="tenkh">{item.makh}</div>
                            <div className="tenkh">{item.ngaytao}</div>
                            <div className="quequan1">{this.ShowMoney(item.Tongtien)}</div>
                            <div className="xemchitiet" onClick={()=>this.changeLocation(`/MainAdmin/Chitiethoadon/${item.mahd}`)}>Xem chi tiết</div>
                            <div className="makh" id="xoakh"  onClick={()=>this.OpenHandleOK(item.mahd, item.masp)}>Xóa</div>
                            <div className="Noidungtb" id={`Noidungtb${item.mahd}`}>
                                <h3>Bạn chắc chắn muốn xóa hóa đơn có mã hóa đơn là {item.mahd}</h3>
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
export default withRouter(HoadonAdmin);