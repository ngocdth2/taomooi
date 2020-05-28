import React from 'react';
import './MainAdmin.css';
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import Product from './Product';
import Trangchu from './Trangchu';
import InsertProduct from './InsertProduct';
import UpdateProduct from './UpdateProduct';
import Nhacungcap from './Nhacungcap';
import InsertNhacungcap from './InsertNhacungcap';
import UpdateNhacungcap from './UpdateNhacungcap';

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import anh1 from '../images/wTQSAZ8.png';
import Khachhang from './Khachhang';
import HoadonAdmin from './HoadonAdmin';
import Chitiethoadon from './Chitiethoadon';
import { Bieudo } from '../BieudoThongke/Bieudo';
import { Bieudotheongay } from '../BieudoThongke/Bieudotheongay';
import { ThongkeText } from '../BieudoThongke/ThongkeText';
export default class MainAdmin extends React.Component{ 

    
      onClickProduct(){
          var a=document.getElementById('dropcon1');
          
          if(a.style.display==='none'){
              a.style.display='block';
                document.getElementById('arrdropup').style.display='block'
                 document.getElementById('arrdropdown').style.display='none'
          }
          else{
            a.style.display='none';
                document.getElementById('arrdropup').style.display='none'
                 document.getElementById('arrdropdown').style.display='block'
          }
      }
      onClickPeopel(){
        var a=document.getElementById('dropcon2');
        
        if(a.style.display==='none'){
            a.style.display='block';
              document.getElementById('arrdropup1').style.display='block'
               document.getElementById('arrdropdown1').style.display='none'
        }
        else{
          a.style.display='none';
              document.getElementById('arrdropup1').style.display='none'
               document.getElementById('arrdropdown1').style.display='block'
        }
    }
    
    render(){
        return(
            <Router>
            <div id="idwapper" >
                
                <div className="menu" id="MainMenu">
                    <div className="wappermenu">
                        <div className="imganh"><img src={anh1} alt="anh1" className="anhimg"/></div>
                        <Link to="/MainAdmin"><div className="dropdown" > Trang chủ</div></Link>
                    <div className="dropdown" onClick={this.onClickProduct} >Quản lý sản phẩm <span className="arrowdropdown"><ArrowDropDown id="arrdropdown"/><ArrowDropUp id="arrdropup"/></span></div>
                    <div className="dropdowncon" id="dropcon1">
                            <Link to="/MainAdmin/Product"><p className="conhover">Xem sản phẩm</p></Link>
                            <Link to="/MainAdmin/InsertProduct"><p className="conhover">Thêm sản phẩm</p></Link>
                            <Link to="/MainAdmin/UpdateProduct"><p className="conhover">sửa sản phẩm</p></Link>
                    </div>
                    <div className="dropdown" onClick={this.onClickPeopel}>Quản lý nhà cung cấp <span className="arrowdropdown"><ArrowDropDown id="arrdropdown1"/><ArrowDropUp id="arrdropup1"/></span> </div>
                    <div className="dropdowncon"  id="dropcon2" >
                            <Link to="/MainAdmin/Nhacungcap"><p className="conhover">Xem thông tin nhà cung cấp</p></Link>
                            <Link to="/MainAdmin/InsertNhacungcap"><p className="conhover">Thêm nhà cung cấp</p></Link>
                            <Link to="/MainAdmin/UpdateNhacungcap"><p className="conhover">sửa nhà cung cấp</p></Link>
                    </div>
                    <Link to="/MainAdmin/Khachhang"><div className="dropdown" >Quản lý khách hàng</div></Link>
                    <Link to="/MainAdmin/ListHoadon"><div className="dropdown" >Quản lý hóa đơn</div></Link>
                   <Link to="/MainAdmin/Bieudo"><div className="dropdown" >Doanh số</div> </Link> 
                    <div className="dropdown" >Thông báo</div>
                </div>
                <div className="waperQC">
                    <p>@2019-2020 <span>AdminDTDD Material Design</span></p>
                    <p>Vision 1.0.5</p>
                </div>
                </div>
            </div>
            <Switch>
            <Route exact  path="/MainAdmin"  children={<Trangchu />} />
            <Route path="/MainAdmin/Product" children={<Product />} />
            <Route path="/MainAdmin/InsertProduct" children={<InsertProduct />} />
            <Route path="/MainAdmin/UpdateProduct" children={<UpdateProduct />} />
            <Route path="/MainAdmin/Nhacungcap" children={<Nhacungcap />} />
            <Route path="/MainAdmin/InsertNhacungcap" children={<InsertNhacungcap />} />
            <Route path="/MainAdmin/UpdateNhacungcap" children={<UpdateNhacungcap />} />
            <Route path="/MainAdmin/Khachhang" children={<Khachhang/>}/>
            <Route path="/MainAdmin/Bieudo" children={<Bieudo/>}/>
            <Route path="/MainAdmin/ThongkeText" children={<ThongkeText/>}/>
            <Route path="/MainAdmin/Bieudotheongay/:id" children={<Bieudotheongay/>}/>
            <Route path="/MainAdmin/ListHoadon" children={<HoadonAdmin/>}/>
            <Route path="/MainAdmin/Chitiethoadon/:id" children={<Chitiethoadon/>}/>
            </Switch>
            </Router>
        );
    }
}