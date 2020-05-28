import React from "react";
import { withRouter } from "react-router-dom";
import './Bieudo.css';
import Axios from "axios";
export class ThongkeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoadons: [],
            products: [],
            banghoadon:[],
            ngaytao:0,
            ngaytao2:0
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/api/hoadon')
            .then(res => {
                this.setState({ hoadons: res.data.hoadons })
            })
            .catch(error => console.log(error))
            Axios.get('http://localhost:4000/api/selecthoadonchitiet')
            .then(res => {
                this.setState({ banghoadon: res.data.banghoadon })
            })
            .catch(error => console.log(error))
        Axios.get('http://localhost:4000/api/products')
            .then(res => {
                this.setState({ products: res.data.products })
            })
            .catch(error => console.log(error))
    }
    OnchangeInput=(e)=>{
        let target = e.target
        let value= target.value
        let name=  target.name
        this.setState({[name]: value})

    }
    Timngaytao=()=>{
        console.log(this.state.ngaytao)
        console.log(this.state.ngaytao2)
        this.changeLocation(`/MainAdmin/Bieudotheongay/${this.state.ngaytao}`)
    }
    changeLocation(link) {
        window.location=link ;
      }
      ShowMoney(item) {
        return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
    }
    TinhTongtien(){
        let b = this.state.banghoadon.map(banghoadon => banghoadon.Tongtien)
        let tong=0
        for(let i=0; i<b.length; i++){
            tong=tong+b[i]
        }
        return tong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
    }
    render() {
        return (
            <div className="WapperBieudo">
                <h1>Thống kê</h1> 
                <div className="KieuchuTT"> <button className="Kieuchu" onClick={()=>this.changeLocation(`/MainAdmin/Bieudo`)}>Biểu đồ</button></div>
     
                <div className="Bieudocot">
                    <div className="TKTTillte">
                        <div className="TittleTKT">Mã hóa đơn</div>
                        <div className="TittleTKT">Mã khách hàng</div>
                        <div className="TittleTKT">Mã sản phẩm</div>
                        <div className="TittleTKT">Ngày tạo</div>
                        <div className="TittleTKT">Số lượng</div>
                        <div className="TittleTKT">Tổng tiền</div>
                    </div>
                    {this.state.banghoadon.map(item=>{
                        return(
                            <div className="TKTTillte">
                                <div className="TittleTKT">{item.mahd}</div>
                                <div className="TittleTKT">{item.makh}</div>
                                <div className="TittleTKT">{item.masp}</div>
                                <div className="TittleTKT">{item.ngaytao}</div>
                                <div className="TittleTKT">{item.soluong}</div>
                                <div className="TittleTKT">{this.ShowMoney(item.Tongtien)}</div>
                            </div>
                        )
                    })}
                    <div className="TongtienTK">
                    <div className="titleTTTK"></div>
                    <div className="titleTTTK"></div>
                    <div className="titleTTTK"></div>
                    <div className="titleTTTK"></div>
                        <div className="titleTTTK">Tổng tiền</div>
                        <div className="titleTTTK">{this.TinhTongtien()}</div>
                    </div>
                   </div>
             
                <div className="Bieudođuongi">
                   
                </div>
            </div>
        );
    }
}
export default withRouter(ThongkeText);
