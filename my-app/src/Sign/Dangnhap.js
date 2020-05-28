import React from 'react';
import {BrowserRouter as Router,Route, Link,withRouter,Switch} from 'react-router-dom';
import anh from '../images/lenovo-s90-chong-nuoc.png';
import './Dangnhap.css';
import Dangky from './Dangky';
import axios from 'axios';
class Dangnhap extends React.Component{ 
  constructor(props){
      super(props);
      this.state={
            products:[ ],
            users:[]
      }
      this.handletendangnhapChange = this.handletendangnhapChange.bind(this);
        this.handlematkhauChange = this.handlematkhauChange.bind(this);
        this.OnclickSumbit = this.OnclickSumbit.bind(this);
        this.OnclickReturn = this.OnclickReturn.bind(this); 
        this.OnSubmit = this.OnSubmit.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
  }
  changeLocation(link) {
    window.location=link ;
  }
  OnSubmit(){
    document.getElementById('SignIn').style.display='none'
}
  OnclickReturn(){
        this.setState({
            tendangnhap:'',matkhau:''
        })
  }
  componentWillMount() {
    axios.get('http://localhost:4000/api/SelectUser')
    .then(res => {
      this.setState({users:res.data.users});
    })
   .catch(error => console.log(error));
  };
  OnclickSumbit(item){ 
    var User = JSON.parse(localStorage.getItem("User")) || [];
    if(this.state.tendangnhap===item.tentaikhoan && Number(this.state.matkhau)===item.matkhau && item.id_Role===1){
    User.unshift(item);
   localStorage.setItem("User",JSON.stringify( User));
          this.changeLocation(`/MainAdmin`)
     }
     else if(this.state.tendangnhap===item.tentaikhoan && Number(this.state.matkhau)===item.matkhau && item.id_Role===2){
      User.unshift(item);
     localStorage.setItem("User",JSON.stringify( User));
            this.changeLocation(`/`)
       }
     else{
       alert("Tên đăng nhập hoặc mật khẩu chưa đúng")
     }
  }
  handletendangnhapChange(e){
    this.setState({tendangnhap:e.target.value})
    if(e.target.value===''){document.getElementById('username').innerHTML="Không được bỏ trống"}
    else{document.getElementById('username').innerHTML=""}
  }
  handlematkhauChange(e){
    this.setState({matkhau:e.target.value})
    if(e.target.value===''){document.getElementById('password').innerHTML="Không được bỏ trống"}
    else{document.getElementById('password').innerHTML=""}
  }
    render(){
        return(
            <Router>
            <div className="singin" id="SignIn">
              {this.state.users.map(item=>{
                return(
                <div className="App1" key={item.id}>
                  
                    <h2>ĐĂNG NHẬP</h2>
                    <table>
                        <tr>
                            <td>Tên đăng nhập:</td>
                            <td><input type="text" name="tentaikoan" value={this.state.tendangnhap} placeholder="usename...." onChange={this.handletendangnhapChange}/></td>
                            <td id="username"></td>
                        </tr>
                        <tr>
                            <td>Mật khẩu:</td>
                            <td><input type="password" name="matkhau" value={this.state.matkhau} placeholder="password...." onChange={this.handlematkhauChange}/></td>
                            <td id="password"></td>
                        </tr>
                        <tr><input type="Checkbox"/>Ghi nhớ</tr>
                        <tr>
                            <td></td>
                            <td><button className="dangnhap" onClick={()=>this.OnclickSumbit(item)}>Đăng nhập</button><button className="quaylai" onClick={this.OnclickReturn}>Quay lại</button></td>
                        </tr>
                        <tr><Link to="/Dangky" onClick={()=>this.changeLocation(`/`)}>Trang chủ</Link></tr>
                        <tr><Link to="/Dangky" onClick={this.OnSubmit}>Tạo tài khoản mới</Link></tr>
                       
                    </table>
                    
                </div>  
              )})} 
                <div className="Logo">
                <img src={anh} alt="logo"/>
                </div> 
            
            </div>
            <Switch>
                <Route path="/Dangky" children={<Dangky/>}/>
            </Switch> 
             </Router>   
            
        );
    }
}
export default withRouter(Dangnhap);