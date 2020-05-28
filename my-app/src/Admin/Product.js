import React from 'react';
import './Product.css';
import axios from 'axios';
import { withRouter,Link } from 'react-router-dom';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
var data = JSON.parse(localStorage.getItem('User'))
 class Product extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            Users: data ? data : [],
            products:[]
        }
    }
    OpenHandleOK(item){
        if (this.state.Users.length !== 0) {
            document.getElementById(`Noidungtb${item}`).style.display = 'block';
            document.getElementById('Thongbaoxoa').style.display = 'block'
        }
        else {
          alert("Mời bạn đăng nhập")
          this.changeLocation(`/Dangnhap`)
        }

     } 
     DangXuathethong=()=>{
        this.changeLocation(`/Dangnhap`) 
        localStorage.removeItem("User")
    }
    changeHandleCancel(item){
        document.getElementById(`Noidungtb${item}`).style.display='none'
        document.getElementById('Thongbaoxoa').style.display='none'
    }
    handleDelete(item,link){
        const sanpham={
          masp: item.masp
        };  
        axios.post('http://localhost:4000/api/deletesanpham', sanpham)
        .then(res => {
          this.setState(prevState => ({
            sanpham: prevState.sanpham
          
          }));  
        } )
        .catch(error => console.log(error));
        window.location.reload();
      }
    componentDidMount(){
        axios.get('http://localhost:4000/api/products')
        .then(res=>{
            this.setState({products: res.data.products})
        })
        .catch(error=>console.log(error))
    }
    changeLocation(link) {
        window.location=link ;
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
            <div className="Product"><div className="Calll" id="Call"><Calendar id="IconOpen" onClick={this.OnpenMain} /></div>
                <div className="dropdown1">
                        
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/UpdateProduct"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                <div className="Thongbaoxoa" id="Thongbaoxoa">
                        
                </div>
               <div onClick={this.onClickcancel}>
                <h1>Thông tin sản phẩm</h1>
                <div className="tableProducts">
                        <div className="thongtinsp1">STT</div>
                            <div className="thongtinsp2">Hình ảnh</div>
                            <div className="thongtinsp3">Tên sản phẩm</div>
                            <div className="thongtinsp3">Giá</div>
                            <div className="thongtinsp4">Số lượng</div>
                            <div className="thongtinsp4">Màu sắc</div>
                            <div className="thongtinsp">Mô tả</div>
                            <div className="thongtinsp4"></div>
                </div>
                {this.state.products.map(item=>{
                    //const imageData = new Buffer(item.image).toString("base64");
                    return(
                        <div className="tableProducts" key={item.masp}>
                            <div className="thongtinsp1">{item.masp}</div>
                            <div className="thongtinsp2"><img src={item.anh} alt="anh"/></div>
                            <div className="thongtinsp3">{item.tensp}</div>
                            <div className="thongtinsp3">{item.giasp}</div>
                            <div className="thongtinsp4">{item.soluong}</div>
                            <div className="thongtinsp4">{item.mausac}</div>
                            <div className="thongtinsp">{item.mota}</div>
                            <div className="thongtinsp4" id="xoasp" onClick={()=>this.OpenHandleOK(item.masp)}>Xóa</div>


                           <div className="Noidungtb" id={`Noidungtb${item.masp}`}>
                                <h3>Bạn chắc chắn muốn xóa sản phẩm {item.tensp}</h3>
                                <input type="submit" value="Đồng ý" onClick={()=>this.handleDelete(item,`/MainAdmin/Product`)}/> 
                                <input type="submit" value="bỏ qua" onClick={()=>this.changeHandleCancel(item.masp)}/>
                            </div>
                        </div>
                    )
                })}
            </div></div>
        );
    }
}
export default withRouter(Product);