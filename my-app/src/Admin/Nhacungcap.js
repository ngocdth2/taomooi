import React from 'react';
import './nhacungcap.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
var data = JSON.parse(localStorage.getItem('User'))
export default class NhanVien extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            Users: data ? data : [],
            nhacungcaps:[]
        }
        this.handleDelete=this.handleDelete.bind(this)
    }
    DangXuathethong=()=>{
        this.changeLocation(`/Dangnhap`) 
        localStorage.removeItem("User")
    }
    changeLocation(link) {
        window.location=link ;
      }
    OpenHandleOK(item){
        if (this.state.Users.length !== 0) {
        document.getElementById(`Noidungtb${item}`).style.display='block';
       document.getElementById('Thongbaoxoa').style.display='block'
         console.log(item)
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
    handleDelete(item,link){
        const nhacungcaps={
          mancc: item.mancc
        };  
        Axios.post('http://localhost:4000/api/deletenhacungcap', nhacungcaps)
        .then(res => {
          this.setState(prevState => ({
            nhacungcaps: prevState.nhacungcaps
          
          }));  
        } )
        .catch(error => console.log(error));
        window.location.reload();
      }
    componentDidMount(){
        Axios.get('http://localhost:4000/api/hang')
        .then(res=>{
            this.setState({nhacungcaps: res.data.nhacungcaps})
        })
        .catch(error=>console.log(error))
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
    render(){
        return(
            <div className="NhanVien"><div className="Calll" id="Call"><Calendar id="IconOpen" onClick={this.OnpenMain} /></div>
                 <div className="dropdown1">
                       
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/Dangnhap"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                <div className="Thongbaoxoa" id="Thongbaoxoa">
                        
                        </div>
                        <div className="NCCli" onClick={this.onClickcancel}>
                <h1>Danh sách nhà cung cấp</h1>
                    <div className="titlencc" id="titlencc2">
                    <div className="mancc">Stt</div>
                          <div  className="tenncc">Tên ncc</div>
                          <div  className="diachincc">Địa chỉ</div>
                          <div  className="emailncc">Email</div>
                          <div  className="emailncc">Số điện thoại</div>
                          <div  className="xoancc"></div>
                      </div>
                      <div id="titlencc3">
              {this.state.nhacungcaps.map(item=>{
                  return(
                      
                      <div key={item.mancc} className="titlencc" >
                          <div className="mancc">{item.mancc}</div>
                          <div  className="tenncc">{item.tenncc}</div>
                          <div  className="diachincc">{item.diachi}</div>
                          <div  className="emailncc">{item.email}</div>
                          <div  className="emailncc">{item.sodt}</div>
                          <div  className="xoancc" onClick={()=>this.OpenHandleOK(item.mancc)}>Xóa</div>
                          <div className="Noidungtb" id={`Noidungtb${item.mancc}`}>
                                <h3>Bạn chắc chắn muốn xóa nhà cung cấp {item.tenncc}</h3>
                                <input type="submit" value="Đồng ý" onClick={()=>this.handleDelete(item,`/MainAdmin/Nhacungcap`)}/> 
                                <input type="submit" value="bỏ qua" onClick={()=>this.changeHandleCancel(item.mancc)}/>
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