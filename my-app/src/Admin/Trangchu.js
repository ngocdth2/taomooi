import React from 'react';
import './Trangchu.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Contacts from '@material-ui/icons/Contacts';
import Pages from '@material-ui/icons/Pages';
import Poll from '@material-ui/icons/Poll';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';

export default class Trangchu extends React.Component{ 
  
    changeLocation=(link)=> {
        window.location=link ;
      }
      OnSumbit(){ 
        document.getElementById('Onclicksignout').style.display='block'
    }
    onClickcancel(){
      document.getElementById('Onclicksignout').style.display='none';
     
    }
    OnpenMain(){
        var a= document.getElementById('MainMenu')
        if(a.style.display==='none'){
            document.getElementById('Call').style.marginLeft="30%"
             return a.style.display='block'; 
           
        }
         document.getElementById('MainMenu').style.display='none';
         document.getElementById('Call').style.marginLeft="0%"
    }
    DangXuathethong=()=>{
        this.changeLocation(`/Dangnhap`) 
        localStorage.removeItem("User")
    }
    render(){
        return(
            <Router>
                
            <div className="Trangchu" id="TC" >
                 <div className="Calll" id="Call"><Calendar id="IconOpen" onClick={this.OnpenMain}/></div>
                    <div className="dropdown1">
                       
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/UpdateProduct"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                
                <div className="ContentTT" id="ContentTT" onClick={this.onClickcancel}>
                <h1>Chào mừng bạn đã đến với ban quản trị</h1>
              <div className="WapperTT">
                  
                  <div className="QLSP" onClick={()=>this.changeLocation(`/MainAdmin/Product`)}>
                  <p><Pages id="iconTT"/></p>
                      Quản lý sản phẩm
                  </div>
                  <div className="QLNCC" onClick={()=>this.changeLocation(`/MainAdmin/Nhacungcap`)}>
                  <p><Pages id="iconTT"/></p>
                      Quản lý nhà cung cấp
                  </div>
                  <div className="QLKH" onClick={()=>this.changeLocation(`/MainAdmin/Khachhang`)}>
                      <p><Contacts id="iconTT"/></p>
                      Quản lý khách hàng
                  </div>
                  <div className="DT" onClick={()=>this.changeLocation(`/MainAdmin/Bieudo`)}>
                  <p><Poll id="iconTT"/></p>
                      Doanh số
                  </div>
                  <div className="TB">
                  <p><NotificationsActive id="iconTT"/></p>
                      Thông báo
                  </div>
              </div>
            </div>
            </div>
            </Router>
        );
    }
}