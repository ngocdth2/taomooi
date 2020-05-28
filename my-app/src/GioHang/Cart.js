import React from 'react';
import { withRouter } from 'react-router-dom';
import { Headers } from '../Headers';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import './Cart.css';
import Close from '@material-ui/icons/Close';
import axios from 'axios';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
var data = JSON.parse(localStorage.getItem('follow'))
export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Giohang: data ? data : [],
            chitiethoadon:[],
            products: [],
            khachhang:[],
            hoadons:[],
            list:[],
            tenkh:'',
            sodt:'',
            tinh_tp:'',
            quan_huyen:'',
            phuong_xa:'',
            sonha:'',
            email:'',
            tongtien:'',
            mahd:0,
            count:1
        }
    }
    HandleSubmit=(event)=>{
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
          event.preventDefault();
          var d= this.state.khachhang.map(item=>item.makh);
          var makh = Math.max.apply(Math,d)+1
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
              const item = this.state.Giohang.map(item=>item.masp)
              const itemtt = this.state.Giohang.map(item=>item.giasp)
              const count = this.state.Giohang.map(item=>item.count)
              const tensp = this.state.Giohang.map(item=>item.tensp)
                const mancc = this.state.Giohang.map(item=>item.mancc)
                const soluong = this.state.Giohang.map(item=>item.soluong)
                const mausac = this.state.Giohang.map(item=>item.mausac)
                const rating = this.state.Giohang.map(item=>item.rating)
                const manhinh = this.state.Giohang.map(item=>item.manhinh)
                const OS = this.state.Giohang.map(item=>item.OS)
                const camerasau = this.state.Giohang.map(item=>item.camerasau)
                const cameratruoc = this.state.Giohang.map(item=>item.cameratruoc)
                const CPU = this.state.Giohang.map(item=>item.CPU)
                const ROM = this.state.Giohang.map(item=>item.ROM)
                const RAM = this.state.Giohang.map(item=>item.RAM)
                const dungluong = this.state.Giohang.map(item=>item.dungluong)
                const mota = this.state.Giohang.map(item=>item.mota)
                const anh = this.state.Giohang.map(item=>item.anh)
                let t = 0;
              for(var j=0; j<this.state.Giohang.length; j++){
                  
                  t += (itemtt[j] * count[j]);
              }
              var b= this.state.hoadons.map(item=>item.mahd);
              var c = Math.max.apply(Math,b)+1;
             
              const hoadons = {
                mahd:c,
                makh: khachhang.makh,
                ngaytao:+today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
                Tongtien: t
            };
            axios.post('http://localhost:4000/api/inserthoadon', hoadons)
                .then(res => {
                    let hoadons = this.state.hoadons;
                    hoadons = [hoadons, ...hoadons];
                    this.setState({ hoadons: hoadons });   
                })
                .catch(error => console.log(error));

                 for(let i=0; i<this.state.Giohang.length; i++){
                     const chitiethoadon = {
                        mahd:hoadons.mahd,
                        masp: item[i],
                        soluong: count[i]
                    };
                axios.post('http://localhost:4000/api/insertchitiethoadonhoadon', chitiethoadon)
                    .then(res => {
                        let chitiethoadon = this.state.chitiethoadon;
                        chitiethoadon = [chitiethoadon, ...chitiethoadon];
                        this.setState({ chitiethoadon: chitiethoadon });   
                    })
                const newsanpham = {
                    masp: item[i],
                    tensp: tensp[i],
                    giasp: itemtt[i],
                    mancc: mancc[i],
                    soluong: soluong[i] - count[i],
                    mausac:mausac[i],
                    rating: rating[i],
                    manhinh: manhinh[i],
                   OS: OS[i],
                   camerasau: camerasau[i],
                    cameratruoc: cameratruoc[i],
                    CPU: CPU[i],
                   ROM: ROM[i],
                    RAM: RAM[i],
                   dungluong: dungluong[i],
                   mota: mota[i],
                    anh: anh[i]
                  };
                  axios.post('http://localhost:4000/api/edit', newsanpham)
                  .then(res => {
                    let key = item[i];
                    this.setState(prevState => ({
                      products: prevState.products.map(
                        elm => elm.id === key? {
                          ...elm,       
                    tensp: tensp[i],
                    giasp: itemtt[i],
                    mancc: mancc[i],
                    soluong: soluong[i] - count[i],
                    mausac:mausac[i],
                    rating: rating[i],
                    manhinh: manhinh[i],
                   OS: OS[i],
                   camerasau: camerasau[i],
                    cameratruoc: cameratruoc[i],
                    CPU: CPU[i],
                   ROM: ROM[i],
                    RAM: RAM[i],
                   dungluong: dungluong[i],
                   mota: mota[i],
                    anh: anh[i]
                        }: elm
                      )
                    }))
                  })
                  .catch(error => console.log(error));
                }
            }
        
            alert("Đặt thành công, quay lại trang chủ")
            this.changeLocation(`/`)
            localStorage.clear();
            
    }
    changeLocation(link) {
        window.location = link;
    }
    renderItem = () => {
        return window.localStorage.follow
    }
    ShowMoney(item) {
        return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/hoadon')
        .then(res=>{
            this.setState({ hoadons: res.data.hoadons})
        })
        .catch(error=>console.log(error))
        axios.get('http://localhost:4000/api/khachhang')
        .then(res=>{
            this.setState({ khachhang: res.data.khachhang})
        })
        .catch(error=>console.log(error))
    }
    OnchageInput=(e)=>{
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
    XOAITEM = (item) => {
        window.location.reload()
        const cartItems = this.state.Giohang.filter((value, index) => {
            return index !== item
        });
        this.setState({ Giohang: data ? data : [] })
        JSON.parse(localStorage.setItem('follow', JSON.stringify(cartItems)))
    }
    TongTien = () => {
        var tongtien = 0;
        for (var i = 0; i < this.state.Giohang.length; i++) {
            tongtien += this.state.Giohang[i].giasp*this.state.Giohang[i].count ;
        }
        return tongtien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ";
    }
    Tang=(item,index)=>{
        if (item.count < item.soluong) {
           document.getElementById('tang').style.color='black'
            const cartItems = this.state.Giohang.filter((value, idex) => {
                return idex !== index
            });
            let a = Object.assign(item, { count: item.count + 1 })
            cartItems.unshift(a)
            this.setState({ Giohang: data ? data : [] })
            JSON.parse(localStorage.setItem('follow', JSON.stringify(cartItems)))
        }
      
      }
      Giam=(item,index)=>{
        if (item.count > 1) {
            document.getElementById('giam').style.color='black'
        const cartItems = this.state.Giohang.filter((value, idex) => {
            return idex !== index
         });
         let a = Object.assign(item,{count: item.count-1})
        cartItems.unshift(a)
             this.setState({ Giohang: data ? data : [] })
            JSON.parse(localStorage.setItem('follow', JSON.stringify(cartItems)))
      }
     
    }
      onChangeCount=(e)=>{
        this.setState({count: e.target.value})
    }
    DemCount(item){
        return item
    }
    render() {
       
        let a = this.state.Giohang.length
        return (
            <div>
                <div className="headerps02"><Headers /></div>
                <div>
                   {a===0?(<div className="CartWapper" id="CartWapper">
                        <div className="IconCart"><ShoppingCart id="SizeCart" /></div>
                        <p>Không có sản phẩm nào trong giỏ hàng</p>
                        <input type="submit" value="Quay về trang chủ" onClick={() => this.changeLocation(`/`)} />
                    </div>):( <div className="WapperListCart" id="WapperListCart">
                        <div className="ListCart"> 
                            <div className="TittleListCart">
                                <p className="tittleCart">GIỎ HÀNG CỦA BẠN( {this.state.Giohang.length} sản phẩm)</p>
                                <p className="linkCart" onClick={() => this.changeLocation(`/`)}>Mua thêm sản phẩm khác</p>
                            </div>
                            <div className="listproduct">
                                <div>
                                    {this.state.Giohang.map((item, index) => {
                                        return (
                                            <div className="ProductsItem" key={index}>
                                                <div className="ItemImage"><img className="imageItem" src={item.anh} alt="anh" /></div>
                                                <div className="NameItem">
                                                    <h3>{item.tensp}</h3>
                                                    <p>Màu: {item.mausac}</p>
                                                </div>
                                                <div className="PriceItemCart">
                                                    <h3> {this.ShowMoney(item.giasp)}</h3>
                                                </div>
                                                <div id="countItemCart" >
                                                    <div className="giam" onClick={()=>this.Giam(item,index)} ><Remove id="giam" /></div>
                                                    <div><input type="text" value={item.count} onChange={this.onChangeCount}/></div>
                                                    <div className="tang" onClick={()=>this.Tang(item,index)}><Add id="tang" /></div>
                                                </div>
                                                <div className="xoaitem"><Close id="CloseItemCart" onClick={() => this.XOAITEM(index)} /></div>
                                            </div>
                                        ) })}
                                </div>
                                <div className="Tongtien">
                                    <h2>Tổng tiền:</h2>
                                    <h2>{this.TongTien()}</h2>
                                </div>
                                <div>
                                    <div className="hoadon2">
                                        <div id="addpadding">
                                            <p><span className="gtanh"><input type="radio" id="myRadio" name="test" defaultChecked/>Anh</span>
                                                <input type="radio" id="myRadio" name="test" /> Chị</p>
                                            <p><span className="hovaten">
                                                <input type="text" id="ho_ten" value={this.state.hoten} placeholder="Họ và tên(*)" onChange={this.OnchageInput} name="tenkh" className="hoten" /></span>
                                                <input className="hoten" id="so_dt" value={this.state.sodt} type="text" name="sodt" onChange={this.OnchageInput} placeholder="số điện thoại(*)" /></p>
                                            <div id="error">
                                                <p id="hotenerror"></p>
                                                <p id="sodterroe"></p>
                                            </div>
                                            <h2>Để phục vụ được nhanh hơn, hãy chọn thêm:</h2>
                                            <h3>Địa chỉ giao hàng</h3>
                                            <p><span className="hovaten"><input type="text" id="tinh_tp" value={this.state.tinh_tp} onChange={this.OnchageInput} name="tinh_tp" placeholder="Nhập tỉnh, thành phố(*)" className="hoten" /></span>
                                                <input className="hoten" type="text" id="quan_huyen" value={this.state.quan_huyen} onChange={this.OnchageInput} placeholder="Nhập quận, huyện(*)" name="quan_huyen" /></p>
                                            <div id="error">
                                                <p id="tinh_tperror"></p>
                                                <p id="quan_huyenerror"></p>
                                            </div>
                                            <p><span className="hovaten"><input id="phuong_xa" value={this.state.phuong_xa} onChange={this.OnchageInput} type="text" placeholder="Nhập phường, xã(*)" name="phuong_xa" className="hoten" /></span>
                                                <input className="hoten" name="sonha" id="sonha" value={this.state.sonha} onChange={this.OnchageInput} type="text" placeholder="Nhập số nhà, tên đường(*)" /></p>
                                            <div id="error">
                                                <p id="phuong_xaerror"></p>
                                                <p id="sonhaerror"></p>
                                            </div>
                                            <p><input type="text" name="email" placeholder="Nhập địa chỉ email" id="email" value={this.state.email} onChange={this.OnchageInput} className="hoten2" /></p>
                                            <h3>Hình thức thanh toán</h3>
                                            <select>
                                                <option>Thanh toán bằng tiền mặt</option>
                                                <option>Thanh toán bằng thẻ</option>
                                                <option>Thanh toán bằng Internet banking</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="dathangdiv"><button className="dathangvang" onClick={this.HandleSubmit}>Đặt hàng</button></div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )}
}
export default withRouter(Cart);