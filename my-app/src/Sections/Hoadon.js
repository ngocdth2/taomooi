import React from 'react';
import './Hoadon.css';
import axios from 'axios';
import {withRouter,BrowserRouter as Router} from 'react-router-dom';
import { Headers } from '../Headers';
//import Dieuchinhsl from './Dieuchinhsl';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
export class Hoadon extends React.Component{ 
  constructor (props) {
    super(props);
    this.state = {
      products: [],
      khachhang:[],
      hoadons:[],
      chitiethoadon:[],
      list:[],
      tenkh:'',
      sodt:'',
      tinh_tp:'',
      quan_huyen:'',
      phuong_xa:'',
      sonha:'',
      email:'',
      count: 1,
      tongtien:'',
    }
    this.changeLocation = this.changeLocation.bind(this);
    this.OnchageInput = this.OnchageInput.bind(this)
    this.HandleSubmit =this.HandleSubmit.bind(this);
    this.Tang =this.Tang.bind(this);
        this.onChangeCount =this.onChangeCount.bind(this);
        this.Giam = this.Giam.bind(this);
  };
  ShowTongTien(item){
    return (item*this.state.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
  }
  changeLocation(link) {
    window.location=link ;
  }
  componentWillMount() {
    axios.get('http://localhost:4000/api/products')
      .then(res => {
        this.setState({ products: res.data.products });
      })
      .catch(error => console.log(error));
    axios.get('http://localhost:4000/api/hoadon')
      .then(res => {
        this.setState({ hoadons: res.data.hoadons })
      })
      .catch(error => console.log(error))
    axios.get('http://localhost:4000/api/khachhang')
      .then(res => {
        this.setState({ khachhang: res.data.khachhang })
      })
      .catch(error=>console.log(error))
  };
  OnchageInput(e){
    const target = e.target;
    const value= target.value;
    const name=target.name;
    this.setState({[name]:value})
    const hotenerror = document.getElementById("hotenerror")
    const sodterroe = document.getElementById("sodterroe")
    const tinh_tperror = document.getElementById("tinh_tperror")
    const quan_huyenerror = document.getElementById("quan_huyenerror")
    const phuong_xaerror = document.getElementById("phuong_xaerror")
    const sonhaerror = document.getElementById("sonhaerror")
    if(this.state.tenkh!==""){
      hotenerror.innerHTML=""
    }
    if(this.state.sodt!==""){
      sodterroe.innerHTML=""
      console.log(Number(this.state.sodt))
    }
    if(this.state.tinh_tp!==""){
      tinh_tperror.innerHTML=""
    }
    if(this.state.quan_huyen!==""){
      quan_huyenerror.innerHTML=""
    }
    if(this.state.phuong_xa!==""){
      phuong_xaerror.innerHTML=""
    }
    if(this.state.sonha!==""){
      sonhaerror.innerHTML=""
    }
  }
  HandleSubmit(event){
    const hoten = document.getElementById("ho_ten")
    const sodt = document.getElementById("so_dt")
    const hotenerror = document.getElementById("hotenerror")
    const sodterroe = document.getElementById("sodterroe")
    const tinh_tperror = document.getElementById("tinh_tperror")
    const quan_huyenerror = document.getElementById("quan_huyenerror")
    const phuong_xaerror = document.getElementById("phuong_xaerror")
    const sonhaerror = document.getElementById("sonhaerror")
    const tinh_tp = document.getElementById("tinh_tp")
    const quan_huyen = document.getElementById("quan_huyen")
    const phuong_xa = document.getElementById("phuong_xa")
    const sonha = document.getElementById("sonha")
    if(this.state.tenkh===""){
     hoten.style.border="1px solid red"
     hotenerror.innerHTML="Mời quý khách nhập đầy đủ họ tên"
      hotenerror.style.color="red"
      hotenerror.style.fontSize="12"
     hoten.focus()
     document.getElementById("error").style.display="flex"
    }
    if(this.state.sodt===""){
      sodt.style.border="1px solid red"
      sodterroe.innerHTML="Mời quý khách nhập số điện thoại"
      sodterroe.style.color="red"
      sodterroe.style.fontSize="12"
      document.getElementById("error").style.display="flex"
     }
     if(this.state.sodt.match===true){
      sodterroe.innerHTML="số điện thoại gồm 9 số từ 0-9"
     }
     if(this.state.tinh_tp===""){
      tinh_tp.style.border="1px solid red"
      tinh_tperror.innerHTML="Mời quý khách nhập tỉnh/thành phố"
      tinh_tperror.style.color="red"
      tinh_tperror.style.fontSize="12"
      document.getElementById("error").style.display="flex"
     }
     if(this.state.quan_huyen===""){
      quan_huyen.style.border="1px solid red"
      quan_huyenerror.innerHTML="Mời quý khách nhập quận/huyện"
      quan_huyenerror.style.color="red"
      quan_huyenerror.style.fontSize="12"
      document.getElementById("error").style.display="flex"
     }
     if(this.state.phuong_xa===""){
      phuong_xa.style.border="1px solid red"
      phuong_xaerror.innerHTML="Mời quý khách nhập phường/xã"
      phuong_xaerror.style.color="red"
      phuong_xaerror.style.fontSize="12"
      document.getElementById("error").style.display="flex"
     }
     if(this.state.sonha===""){
      sonha.style.border="1px solid red"
      sonhaerror.innerHTML="Mời quý khách nhập số nhà"
      sonhaerror.style.color="red"
      sonhaerror.style.fontSize="12"
      document.getElementById("error").style.display="flex"
     }
     else{
      var d= this.state.khachhang.map(item=>item.makh);
      var makh = Math.max.apply(Math,d)+1
      event.preventDefault();
      const khachhang = {
          makh: makh,
          tenkh: this.state.tenkh,
          sodt: this.state.sodt,
          email: this.state.email,
          Quequan: this.state.phuong_xa+"-"+this.state.quan_huyen+"-"+ this.state.tinh_tp,
      };
      axios.post('http://localhost:4000/api/insertkhachhang', khachhang)
          .then(res => {
              let khachhang = this.state.khachhang;
              khachhang = [khachhang, ...khachhang];
              this.setState({ khachhang: khachhang });
          })
          .catch(error => console.log(error));
          var today = new Date();
          const item = this.state.products.find(product => product.masp === +this.props.match.params.id)
          console.log(item)
          console.log(this.state.hoadons)
          console.log(this.state.khachhang)
          var b= this.state.hoadons.map(item=>item.mahd);
console.log(this.state.count)
          var c = Math.max.apply(Math,b)+1;
          console.log(c)
          const hoadons = {
            mahd: c,
            makh:khachhang.makh,
            ngaytao:+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
            Tongtien: item.giasp*this.state.count
        };
      axios.post('http://localhost:4000/api/inserthoadon', hoadons)
          .then(res => {
              let hoadons = this.state.hoadons;
              hoadons = [hoadons, ...hoadons];
              this.setState({ hoadons: hoadons });   
          })
            .catch(error => console.log(error));
            console.log(this.state.count)

            const chitiethoadon = {
              mahd:hoadons.mahd,
              masp: item.masp,
              soluong: this.state.count
          };
          console.log(chitiethoadon.soluong)
      axios.post('http://localhost:4000/api/insertchitiethoadonhoadon',chitiethoadon)
          .then(res => {
              let chitiethoadon = this.state.chitiethoadon;
              chitiethoadon = [chitiethoadon, ...chitiethoadon];
              this.setState({ chitiethoadon: chitiethoadon });   
          })
          .catch(error => console.log(error));
            const newsanpham = {
              masp: item.masp,
              tensp: item.tensp,
              giasp: item.giasp,
              mancc: item.mancc,
              soluong: item.soluong - this.state.count,
              mausac: item.mausac,
              rating: item.rating,
              manhinh: item.manhinh,
             OS: item.OS,
             camerasau: item.camerasau,
              cameratruoc: item.cameratruoc,
              CPU: item.CPU,
             ROM: item.ROM,
              RAM: item.RAM,
             dungluong: item.dungluong,
             mota: item.mota,
              anh: item.anh,
            };
            axios.post('http://localhost:4000/api/edit', newsanpham)
              .then(res => {
                let key = item.masp;
                this.setState(prevState => ({
                  products: prevState.products.map(
                    elm => elm.id === key? {
                      ...elm,
                      tensp: item.tensp,
                       giasp: item.giasp,
                        mancc: item.mancc,
                        soluong: item.soluong,
                         mausac: item.mausac,
                         rating: item.rating,
                         manhinh:item.manhinh,
                        OS: item.OS,
                         camerasau:item.camerasau,
                         cameratruoc: item.cameratruoc,
                         CPU: item.CPU,
                        ROM: item.ROM,
                        RAM: item.RAM,
                        dungluong: item.dungluong,
                        mota:item.mota,
                       anh: item.anh
                    }: elm
                  )
                }))
              })
              .catch(error => console.log(error));
        
         alert("Đặt thành công") 
         /*if(true){
           window.location.reload()
         } */}   
}
onChangeCount(e){
    this.setState({count: e.target.value})
}
Tang(){
  const item = this.state.products.find(product => product.masp === +this.props.match.params.id)
  if(this.state.count<item.soluong){
    this.setState({count: this.state.count+1})
    document.getElementById('tang').style.color='black'
  }
  else{
    document.getElementById('tang').style.color='gray'
  } 
}
Giam(){
    if(this.state.count>1){
        document.getElementById('giam').style.color="black"
        this.setState({count: this.state.count-1})
    }
    if(this.state.count===2){
        document.getElementById('giam').style.color="#DCDCDC"  
   }
   console.log(this.state.count)
}
ShowMoney(item){
  return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"đ"
}
    render(){
        const item = this.state.products.find(product => product.masp === +this.props.match.params.id)
        if(this.state.count>1){
          document.getElementById('giam').style.color="black"  
      }  
        return(
          <Router>
                <div className="wapperHoaDon">
                  <Headers/>
                  {item ? (<div className="hoadon">
                    <div className="backgroundhoadon">
                      <h1>BIÊN LAI ĐƠN HÀNG</h1>
                    <div className="hoadon1">
                      <div className="thongtinhd">
                          <div className="nameanh">
                            <img src={item.anh} alt="anh"/>
                            <div className="namemau">
                                <h3>{item.tensp}</h3>
                                <h3>Màu sắc: {item.mausac}</h3>
                            </div>
                          </div>
                          <div className="giasl">
                            <h3>{this.ShowMoney(item.giasp)}</h3>
                            <div className="dieuchinh">
                             <div className="giam" onClick={this.Giam} ><Remove id="giam"/></div>
                                <div><input type="text" value={this.state.count} onChange={this.onChangeCount}/></div>
                             <div className="tang" onClick={this.Tang}><Add id="tang"/></div>
                            </div>
                          </div>
                      </div>
                      <div className="tongtien">
                        <div className="labeltongtien">
                            <h3>Tổng tiền</h3>
                            <p>Tổng tiền cần thanh toán</p>
                        </div>
                        <div className="numbertongtien">
                          <h3>{this.ShowTongTien(item.giasp)}</h3>
                          <p>{this.ShowTongTien(item.giasp)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="hoadon2">
                      <div id="addpadding">
                    <p><span className="gtanh"><input type="radio" id="myRadio" name="test" checked/>Anh</span>
                     <input type="radio" id="myRadio" name="test"/> Chị</p>
                    <p><span className="hovaten">
                        <input type="text" id="ho_ten" value={this.state.hoten} placeholder="Họ và tên(*)" onChange={this.OnchageInput} name="tenkh" className="hoten"/></span>
                       
                       <input className="hoten" id="so_dt" value={this.state.sodt} type="text" name="sodt"  onChange={this.OnchageInput} placeholder="số điện thoại(*)"/></p>
                   <div id="error">
                        <p id="hotenerror"></p>
                        <p id="sodterroe"></p>
                    </div>
                   <h2>Để phục vụ được nhanh hơn, hãy chọn thêm:</h2>
                   <h3>Địa chỉ giao hàng</h3>
                   <p><span className="hovaten"><input type="text" id="tinh_tp" value={this.state.tinh_tp} onChange={this.OnchageInput} name="tinh_tp" placeholder="Nhập tỉnh, thành phố(*)" className="hoten"/></span>
                   <input className="hoten" type="text" id="quan_huyen"  value={this.state.quan_huyen} onChange={this.OnchageInput} placeholder="Nhập quận, huyện(*)" name="quan_huyen"/></p>
                   <div id="error">
                        <p id="tinh_tperror"></p>
                        <p id="quan_huyenerror"></p>
                    </div>
                   <p><span className="hovaten"><input  id="phuong_xa" value={this.state.phuong_xa} onChange={this.OnchageInput} type="text" placeholder="Nhập phường, xã(*)" name="phuong_xa" className="hoten"/></span>
                   <input className="hoten" name="sonha"  id="sonha" value={this.state.sonha} onChange={this.OnchageInput} type="text" placeholder="Nhập số nhà, tên đường(*)"/></p>
                   <div id="error">
                        <p id="phuong_xaerror"></p>
                        <p id="sonhaerror"></p>
                    </div>
                   <p><input type="text" name="email" placeholder="Nhập địa chỉ email"  id="email" value={this.state.email}  onChange={this.OnchageInput}  className="hoten2"/></p>
                      <h3>Hình thức thanh toán</h3>
                    <select>
                      <option>Thanh toán bằng tiền mặt</option>
                      <option>Thanh toán bằng thẻ</option>
                      <option>Thanh toán bằng Internet banking</option>
                    </select>
                   </div> 
                    </div>
                    <div className="dathangdiv"><button className="dathangvang" onClick={this.HandleSubmit}>Đặt hàng</button></div>
                  </div> 
                  <p className="loiket">Rất hân hạnh được phục vụ quý khách. Hẹn gặp lại!</p>      
                  </div>) : null} 
                </div>
              </Router>
        );
    }
}
export default withRouter(Hoadon);