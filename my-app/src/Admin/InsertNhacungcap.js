import React from 'react';
import './InsertNhacungcap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
var data = JSON.parse(localStorage.getItem('User'))
export default class InsertNhanVien extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            Users: data ? data : [],
            nhacungcap:[],
            tenncc:'',
            diachi:'',
            sodt:'',
            email:'',
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleInsertSubmit=this.handleInsertSubmit.bind(this)
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
       console.log(value)
      };
    handleInsertSubmit (event){
        console.log(this.state.Users)
        if(this.state.Users.length!==0){
            if (this.state.tenncc === "") {
                document.getElementById('textTB').innerHTML = "Bạn chưa nhập tên nhà cung cấp";
                document.getElementById('textTB').style.color = "red"
            }
            else {
                if (this.state.diachi === "") {
                    document.getElementById('textTB').innerHTML = "Bạn chưa nhập địa chỉ nhà cung cấp";
                    document.getElementById('textTB').style.color = "red"
                }
                else {
                    if (this.state.email === "") {
                        const newLocal = "Bạn chưa nhập địa chỉ Email nhà cung cấp";
                        document.getElementById('textTB').innerHTML = newLocal;
                        document.getElementById('textTB').style.color = "red"
                    }
                    else {
                        if (this.state.sodt === "") {
                            document.getElementById('textTB').innerHTML = "Bạn chưa nhập số điện thoại nhà cung cấp";
                            document.getElementById('textTB').style.color = "red"
                        }
                        else {
                            event.preventDefault();
                            const nccitem = {
                                mancc: '',
                                tenncc: this.state.tenncc,
                                diachi: this.state.diachi,
                                email: this.state.email,
                                sodt: this.state.sodt,
                            };
                            axios.post('http://localhost:4000/api/insertnhacungcap', nccitem)
                                .then(res => {
                                    let nhacungcap = this.state.nhacungcap;
                                    nhacungcap = [nccitem, ...nhacungcap];
                                    this.setState({ nhacungcap: nhacungcap });
                                    alert("them thành công")
                                    if (true) {
                                        window.location.reload();
                                    }
                                })
                                .catch(error => console.log(error));
                        }
                    }
                }
            }
        }
        else {
            alert("Mời bạn đăng nhập")
            this.changeLocation(`/Dangnhap`)
        }
    }
        OnSumbit(){ 
            document.getElementById('Onclicksignout').style.display='block'
        }
        onClickcancel(){
          document.getElementById('Onclicksignout').style.display='none';
        }
        changeLocation(link) {
            window.location=link ;
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
            <div className="InsertNhanVien"><div className="Calll" id="Call"><Calendar id="IconOpen" onClick={this.OnpenMain} /></div>
                <div className="dropdown1">
                        
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/Dangnhap"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                    <div className="InssertNVC" onClick={this.onClickcancel}>
                <h1>Thêm nhà cung cấp</h1>
                <div className="nhacungcap">
                    <h3 id="textTB"> </h3>
                    <div className="insertncc">
                        <p>Tên nhà cung cấp</p>
                        <p><input type="text" name="tenncc" onChange={this.handleInputChange} value={this.state.tenncc}/></p>
                    </div>
                    <div className="insertncc">
                        <p>Địa chỉ nhà cung cấp</p>
                        <p><input type="text" name="diachi" value={this.state.diachi} onChange={this.handleInputChange}/></p>
                    </div>
                    <div className="insertncc">
                        <p>Email nhà cung cấp</p>
                        <p><input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/></p>
                    </div>
                    <div className="insertncc">
                        <p>Số điện thoại nhà cung cấp</p>
                        <p><input type="text" name="sodt" value={this.state.sodt} onChange={this.handleInputChange}/></p>
                    </div>
                    <div className="insertncc2">
                    <div className="insertncc1">
                        
                        <p><input type="submit" value="Thêm" onClick={this.handleInsertSubmit}/></p>
                        <p><input type="submit" value="Xóa bỏ"/></p>
                    </div></div>
                </div>
            </div></div>
        );
    }
}