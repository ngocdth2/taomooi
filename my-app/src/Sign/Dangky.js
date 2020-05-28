import React from 'react';
import './Dangky.css';
import anh from '../images/lenovo-s90-chong-nuoc.png';
import Axios from 'axios';
export default class Dangky extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            khachhang:[],
            tenkh:'',
            sodt:'',
            email:'',
            Quequan:'',
            nguoidung:[],
            id_Role:2,
            tentaikhoan: '',
            matkhau:'',
        }     
    }
    OnclickReturn=()=>{
        this.setState({
            tenkh:'',
            sodt:'',
            email:'',
            Quequan:'',
            tentaikhoan: '',
            matkhau:'',
        })
    }
    OnclickSumbit=(event)=>{
        let a =this.state.tenkh
        let b = this.state.email
        let d = this.state.tentaikhoan
        let f = this.state.matkhau
        let n = this.state.Quequan
        let s = this.state.sodt
        if(a!==""&& b!==""&& d!=="" && f!=="" && n!=="" && s!==""){
            event.preventDefault();
            const khachhang = {
                makh: '',
                tenkh: this.state.tenkh,
                sodt: this.state.sodt,
                email: this.state.email,
                Quequan: this.state.Quequan,
            };
            Axios.post('http://localhost:4000/api/insertkhachhang', khachhang)
                .then(res => {
                    let khachhang = this.state.khachhang;
                    khachhang = [khachhang, ...khachhang];
                    this.setState({ khachhang: khachhang });
                })
                .catch(error => console.log(error));   
                alert("đăng ký thành công")
               
        }
        else{
            alert(" Vui lòng nhập đầy đủ thông tin")
        }
        
    }
    changeLocation(link) {
        window.location=link ;
      }
    OnchageInput=(e)=>{
        const target = e.target;
        const value= target.value;
        const name=target.name;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="singup" id="SignUp">
                <div className="App">
                    <h2>TẠO TÀI KHOẢN MỚI</h2>
                    <table>
                        <tr>
                            <td>Họ và tên:</td>
                            <td><input type="text" onChange={this.OnchageInput} name="tenkh" placeholder="Họ và tên...." value={this.state.hoten}/></td>
                            <td id="hoten"></td>
                        </tr>
                        <tr>
                            <td>số điện thoại:</td>
                            <td><input type="text" name="sodt" placeholder="số điện thoại...." onChange={this.OnchageInput} value={this.state.sodt}/></td>
                            <td id="sodt"></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="text" name="email" placeholder="Email...." value={this.state.Email} onChange={this.OnchageInput}/></td>
                            <td id="Email"></td>
                        </tr>
                        <tr>
                            <td>Quê quán:</td>
                            <td><input type="text" name="Quequan" value={this.state.Quequan} placeholder="Quê quán..." onChange={this.OnchageInput}/></td>
                            <td id="ngaysinh"></td>
                        </tr>
                       
                        <tr>
                            <td>Tên đăng nhập:</td>
                            <td><input type="text" placeholder="usename...." name="tentaikhoan" onChange={this.OnchageInput} value={this.state.tentaikhoan}/></td>
                            <td id="username"></td>
                        </tr>
                        <tr>
                            <td>Mật khẩu:</td>
                            <td><input type="password" placeholder="password...." name="matkhau" onChange={this.OnchageInput} value={this.state.matkhau}/></td>
                            <td id="password"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button className="dangnhap" onClick={this.OnclickSumbit}>Đăng ký</button><button className="quaylai" onClick={this.OnclickReturn}>Quay lại</button></td>
                        </tr>
                        
                    </table>  

                </div>
                <div className="Logo">
                <img src={anh} alt="logo"/>
                </div>
            </div>   
        );
    }
}