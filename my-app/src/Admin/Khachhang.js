import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Axios from 'axios';
import './Khachhang.css';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
var data = JSON.parse(localStorage.getItem('User'))
class Khachhang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: data ? data : [],
            khachhang: []
        }
    }
    changeLocation(link) {
        window.location = link;
    }
    DangXuathethong=()=>{
        this.changeLocation(`/Dangnhap`) 
        localStorage.removeItem("User")
    }
    OpenHandleOK(item) {
        if (this.state.Users.length !== 0) {
            document.getElementById(`Noidungtb${item}`).style.display = 'block';
            document.getElementById('Thongbaoxoa').style.display = 'block'
            console.log(item)

        } else {
            alert("Mời bạn đăng nhập")
            this.changeLocation(`/Dangnhap`)
        }
    }
    changeHandleCancel(item) {
        document.getElementById(`Noidungtb${item}`).style.display = 'none'
        document.getElementById('Thongbaoxoa').style.display = 'none'
    }
    handleDelete(item) {
        const khachhang = {
            makh: item.makh
        };
        Axios.post('http://localhost:4000/api/deletekhachhang', khachhang)
            .then(res => {
                this.setState(prevState => ({
                    khachhang: prevState.khachhang

                }));
            })
            .catch(error => console.log(error));
        window.location.reload();
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/api/khachhang')
            .then(res => {
                this.setState({ khachhang: res.data.khachhang })
            })
            .catch(error => console.log(error))
    }
    OnSumbit() {
        document.getElementById('Onclicksignout').style.display = 'block'
    }
    onClickcancel() {
        document.getElementById('Onclicksignout').style.display = 'none';
    }
    render() {
        return (
            <div className="khachhang">
                <div className="dropdown1">
                    <div className="Calll"><Calendar /></div>
                    <AccountCricle onClick={this.OnSumbit} id="iconAccount" />
                    <ul id="Onclicksignout">

                        <Link to="/Product"><li>thông tin cá nhân</li></Link>
                        <Link to="/InsertProduct"><li>thông báo</li></Link>
                        <Link to="/Dangnhap"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                    </ul>
                </div>
                <div className="Thongbaoxoa" id="Thongbaoxoa">

                </div>
                <div className="KHlist" onClick={this.onClickcancel}>
                    <h1>Danh sách khách hàng</h1>
                    <div className="wapperkhang">
                        <div className="danhsachkh">
                            <div className="makh">STT</div>
                            <div className="tenkh">tên khách hàng</div>
                            <div className="tenkh">Số điện thoại</div>
                            <div className="tenkh">Email</div>
                            <div className="quequan">Quê quán</div>
                            <div className="makh"></div>
                        </div>
                        {this.state.khachhang.map(item => {
                            return (
                                <div key={item.makh} className="khachhangds">
                                    <div className="makh">{item.makh}</div>
                                    <div className="tenkh">{item.tenkh}</div>
                                    <div className="tenkh">{item.sodt}</div>
                                    <div className="tenkh">{item.email}</div>
                                    <div className="quequan">{item.Quequan}</div>
                                    <div className="makh" id="xoakh" onClick={() => this.OpenHandleOK(item.makh)}>Xóa</div>
                                    <div className="Noidungtb" id={`Noidungtb${item.makh}`}>
                                        <h3>Bạn chắc chắn muốn xóa khách hàng {item.tenkh}</h3>
                                        <input type="submit" value="Đồng ý" onClick={() => this.handleDelete(item)} />
                                        <input type="submit" value="bỏ qua" onClick={() => this.changeHandleCancel(item.makh)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div></div>
            </div>
        );
    }
}
export default withRouter(Khachhang);