import React from 'react';
import './UpdateNhacungcap.css';
import Axios from 'axios';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
var data = JSON.parse(localStorage.getItem('User'))
export default class UpdateNhanVien extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            Users: data ? data : [],
            products:[],
            nhacungcaps:[],
            mancc:'',
            tenncc:'',
            diachi:'',
            email:'',
            sodt:''
        }
        this.OnchangeInput = this.OnchangeInput.bind(this)
        this.OnchangeFind = this.OnchangeFind.bind(this)
        this.SubmitSelect=this.SubmitSelect.bind(this)
        this.SubmitEdit=this.SubmitEdit.bind(this)
    }
    OnchangeInput(e){
        const target = e.target;
        const value=target.value;
        const name=target.name;
        this.setState({
            [name]:value
        })
    }
    
    changeLocation(link) {
        window.location=link ;
      }
    OnchangeFind(e){
        this.setState({mancc: e.target.value})
    }
    SubmitSelect(){
        if (this.state.Users.length !== 0) {
        console.log(this.state.nhacungcaps)
        if(this.state.nhacungcaps.findIndex(nhacungcap=>nhacungcap.mancc===Number(this.state.mancc))!==-1){
            this.setState({
                tenncc:this.state.nhacungcaps.find(nhacungcap=>nhacungcap.mancc===Number(this.state.mancc)).tenncc,
                diachi: this.state.nhacungcaps.find(nhacungcap=>nhacungcap.mancc===Number(this.state.mancc)).diachi,
                email: this.state.nhacungcaps.find(nhacungcap=>nhacungcap.mancc===Number(this.state.mancc)).email,
                sodt: this.state.nhacungcaps.find(nhacungcap=>nhacungcap.mancc===Number(this.state.mancc)).sodt
            })
        }
        else{
            alert("Mã nhà cung cấp "+ `${this.state.mancc}`+ " không tồn tại")
            window.location.reload()
        }
       
    } else {
          alert("Mời bạn đăng nhập")
          this.changeLocation(`/Dangnhap`)
        }
}
    SubmitEdit(event){
        if (this.state.Users.length !== 0) {
        event.preventDefault();
        if(this.state.tenncc!=='' && this.state.diachi!=='' && this.state.email!=="" && this.state.sodt!==''){
        const newnhacungcap={
            mancc: this.state.mancc,
            tenncc:this.state.tenncc ,
            diachi: this.state.diachi,
            email: this.state.email,
            sodt: this.state.sodt

        }
        Axios.post('http://localhost:4000/api/editnhacungcap',newnhacungcap)
            .then(res=>{
                    let key = this.state.mancc;
                    this.setState(prevState=>({
                        nhacungcaps: prevState.nhacungcaps.map(
                            elm => elm.id === key? {
                                ...elm,
                                tenncc: this.state.tenncc,
                                 diachi: this.state.diachi,
                                  email: this.state.email,
                                  sodt: this.state.sodt 
                              }: elm
                            )
                          }))
            }
            )
            alert('cập nhật thành công')
            window.location.reload()
        }
        else{
            alert("Hãy nhập đầy đủ thông tin")
        }
        }else {
      alert("Mời bạn đăng nhập")
      this.changeLocation(`/Dangnhap`)
    }
    }
    
        componentDidMount() {
            Axios.get('http://localhost:4000/api/hang')
            .then(res => {
              this.setState({nhacungcaps:res.data.nhacungcaps});
            })
           .catch(error => console.log(error)); 
           
          };
          OnSumbit(){ 
            document.getElementById('Onclicksignout').style.display='block'
        }
        onClickcancel(){
          document.getElementById('Onclicksignout').style.display='none';
        }
        OnpenMain(){
            var a= document.getElementById('MainMenu')
            document.getElementById('Call').style.marginLeft="30%"
            if(a.style.display==='none'){
                 a.style.display='block';
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
            <div className="UpdateNhanVien"><div className="Calll" id="Call"><Calendar id="IconOpen" onClick={this.OnpenMain} /></div>
                 <div className="dropdown1">
                      
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/Dangnhap"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                <div onClick={this.onClickcancel} className="UPDATENV">
                    <h1>Sửa thông tin nhà cung cấp</h1>
                    <div className="timnhacc">
                        <p>Nhập mã nhà cung cấp: <input className="textInput" type="text" value={this.state.mancc} onChange={this.OnchangeFind}/></p>
                        <p><input type="submit" className="submitim" value="Tìm" onClick={this.SubmitSelect}/></p>
                    </div>
                    <h2>Sửa lại thông tin nhà cung cấp</h2>
                    <div className="suaNhacc">
                        <div className="updatencc">
                            <p>Tên nhà cung cấp</p>
                            <p><input type="text" name="tenncc" value={this.state.tenncc} onChange={this.OnchangeInput}/></p>
                        </div>
                        <div className="updatencc">
                            <p>Địa chỉ nhà cung cấp</p>
                            <p><input type="text" name="diachi" value={this.state.diachi} onChange={this.OnchangeInput}/></p>
                        </div>
                        <div className="updatencc">
                            <p>Email nhà cung cấp</p>
                            <p><input type="text" name="email" value={this.state.email} onChange={this.OnchangeInput}/></p>
                        </div>
                        <div className="updatencc">
                            <p>Số điện thoại nhà cung cấp</p>
                            <p><input type="text" name="sodt" value={this.state.sodt} onChange={this.OnchangeInput}/></p>
                        </div>
                        <div className="updatencc1">
                            
                            <p><input type="submit" value="Lưu" onClick={this.SubmitEdit}/></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}