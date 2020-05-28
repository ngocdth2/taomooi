import React from 'react';
import './UpdateProduct.css';
import axios from 'axios';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
import {Link } from 'react-router-dom';
var data = JSON.parse(localStorage.getItem('User'))
export default class UpdateProduct extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
          Users: data ? data : [],
            products: [],
            masp:'',
            tensp:'',
            giasp:'',
            mancc:'',
            soluong:'',
            mausac:'',
            rating:'',
            manhinh:'',
            OS:'',
            camerasau:'',
            cameratruoc:'',
            CPU:'',
            ROM:'',
            RAM:'',
            dungluong:'',
            mota:'',
            anh:'',
           
        }
        this.handleEditSubmit= this.handleEditSubmit.bind(this)
        this.handleInputChange =this.handleInputChange.bind(this);
        this.onChangeSelect=this.onChangeSelect.bind(this);
        this.findSelect=this.findSelect.bind(this);
        this.UpdateSP=this.UpdateSP.bind(this);
        this.encodeImageFileAsURL=this.encodeImageFileAsURL.bind(this)
    }
    changeLocation(link) {
      window.location=link ;
    }
    UpdateSP(){
      if(this.state.tensp !==''&& this.state.CP!==''&&this.state.mancc !==''&& this.state.giasp!==''&&this.state.soluong !==''&& this.state.rating!==''
      &&this.state.RAM !==''&& this.state.ROM!==''&&this.state.mausac !==''&& this.state.dungluong!==''&&this.state.mota !==''&& this.state.anh!==''
      &&this.state.camerasau !==''&& this.state.cameratruoc!==''){
        alert('cập nhật thành công')
      }
      else{
          alert("Hãy nhập đầy đủ thông tin")
      }
    }
   
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
       
      };
      componentDidMount() {
        axios.get('http://localhost:4000/api/products')
        .then(res => {
          this.setState({products:res.data.products});
        })
       .catch(error => console.log(error)); 
       
      };
      onChangeSelect(e){
        this.setState({masp: e.target.value})
      }
      findSelect(){
        if (this.state.Users.length !== 0) {
        if(this.state.products.findIndex(product=>product.masp===Number(this.state.masp))!==-1){
          this.setState({
            tensp: this.state.products.find(product => product.masp===Number(this.state.masp)).tensp,
            giasp: this.state.products.find(product => product.masp===Number(this.state.masp)).giasp,
            mancc: this.state.products.find(product => product.masp===Number(this.state.masp)).mancc,
            soluong: this.state.products.find(product => product.masp===Number(this.state.masp)).soluong,
            mausac: this.state.products.find(product => product.masp===Number(this.state.masp)).mausac,
            rating: this.state.products.find(product => product.masp===Number(this.state.masp)).rating,
            manhinh: this.state.products.find(product => product.masp===Number(this.state.masp)).manhinh,
           OS: this.state.products.find(product => product.masp===Number(this.state.masp)).OS,
           camerasau: this.state.products.find(product => product.masp===Number(this.state.masp)).camerasau,
            cameratruoc: this.state.products.find(product => product.masp===Number(this.state.masp)).cameratruoc,
            CPU: this.state.products.find(product => product.masp===Number(this.state.masp)).CPU,
           ROM: this.state.products.find(product => product.masp===Number(this.state.masp)).ROM,
            RAM: this.state.products.find(product => product.masp===Number(this.state.masp)).RAM,
           dungluong: this.state.products.find(product => product.masp===Number(this.state.masp)).dungluong,
           mota: this.state.products.find(product => product.masp===Number(this.state.masp)).mota,
            anh: this.state.products.find(product => product.masp===Number(this.state.masp)).anh,
          })
        }
        else{
          alert("Mã sản phẩm "+ `${this.state.masp}`+ " không tồn tại")
        }
      }else {
        alert("Mời bạn đăng nhập")
        this.changeLocation(`/Dangnhap`)
      }
      }
      handleEditSubmit = (event) => {
        if (this.state.Users.length !== 0) {
        if(this.state.tensp !==''&& this.state.CP!==''&&this.state.mancc !==''&& this.state.giasp!==''&&this.state.soluong !==''&& this.state.rating!==''
      &&this.state.RAM !==''&& this.state.ROM!==''&&this.state.mausac !==''&& this.state.dungluong!==''&&this.state.mota !==''&& this.state.anh!==''
      &&this.state.camerasau !==''&& this.state.cameratruoc!==''){
      
      
        event.preventDefault();
      
        const newUpdate = {
          masp: this.state.masp,
          tensp: this.state.tensp,
          giasp: this.state.giasp,
          mancc: this.state.mancc,
          soluong: this.state.soluong,
          mausac: this.state.mausac,
          rating: this.state.rating,
          manhinh: this.state.manhinh,
         OS: this.state.OS,
         camerasau: this.state.camerasau,
          cameratruoc: this.state.cameratruoc,
          CPU: this.state.CPU,
         ROM: this.state.ROM,
          RAM: this.state.RAM,
         dungluong: this.state.dungluong,
         mota: this.state.mota,
          anh: this.state.anh,
        };
     
        axios.post('http://localhost:4000/api/edit', newUpdate)
          .then(res => {
            let key = this.state.masp;
            this.setState(prevState => ({
              products: prevState.products.map(
                elm => elm.id === key? {
                  ...elm,
                  tensp: this.state.tensp,
                   giasp: this.state.giasp,
                    mancc: this.state.mancc,
                    soluong: this.state.soluong,
                     mausac: this.state.mausac,
                     rating: this.state.rating,
                     manhinh: this.state.manhinh,
                    OS: this.state.OS,
                     camerasau: this.state.camerasau,
                     cameratruoc: this.state.cameratruoc,
                     CPU: this.state.products.CPU,
                    ROM: this.state.products.ROM,
                    RAM: this.state.products.RAM,
                    dungluong: this.state.dungluong,
                    mota: this.state.products.mota,
                   anh: this.state.products.anh
                }: elm
              )
            }))
            alert('cập nhật thành công')
            if(true){
              window.location.reload();
            }
          })
          .catch(error => console.log(error));
        }
        else{
          alert('nhập đầy đủ thông tin')
        }
      }else {
        alert("Mời bạn đăng nhập")
        this.changeLocation(`/Dangnhap`)
      }
      };
      encodeImageFileAsURL(e){
        var seft = this;
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          seft.setState({image: reader.result})
        }
        reader.readAsDataURL(file);
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
  DangXuathethong=()=>{
    this.changeLocation(`/Dangnhap`) 
    localStorage.removeItem("User")
}
    render(){
        return(
            <div className="UpdateProduct"><div className="Calll" id="Call"><Calendar id="IconOpen" onClick={this.OnpenMain} /></div>
              <div className="dropdown1">
                       
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/Dangnhap"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                    <div onClick={this.onClickcancel}>
                <h1>Sửa thông tin sản phẩm</h1>
                <div className="timmasp">
                    Nhập mã sản phẩm đúng: <input type="text" className="inputtim" onChange={this.onChangeSelect} value={this.state.masp}/> 
                <input type="submit" value="Tìm" className="inputtim1" onClick={this.findSelect}/>
                </div>
                
                <div>
                    <h2>Nhập thông tin</h2>
                    <div className="wapperInsert">
                      <div className="wapperInputInsert">
                        <div className="InsertInput">
                          <div className="InsertLabel">Tên sản phẩm</div>
                          <div><input className="Inpunt" id="erorboder" type="text" name="tensp" value={this.state.tensp} onChange={this.handleInputChange}/></div>
                         
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Gía sản phẩm</div>
                          <div><input className="Inpunt" type="text" name="giasp" value={this.state.giasp} onChange={this.handleInputChange}/></div>
                          
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Mã nhà cung cấp</div>
                          <div><input className="Inpunt" type="text" id="mancc" name="mancc" value={this.state.mancc}  disabled/></div>
                          
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Số lượng</div>
                          <div><input className="Inpunt" type="text" name="soluong" value={this.state.soluong} onChange={this.handleInputChange}/></div>
                          
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Màu sắc</div>
                          <div><input className="Inpunt" type="text" name="mausac" value={this.state.mausac} onChange={this.handleInputChange}/></div>
                          
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Rating</div>
                          <div><input className="Inpunt" type="text" name="rating" value={this.state.rating} onChange={this.handleInputChange}/></div>
                         
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Màn hình</div>
                          <div><input className="Inpunt" type="text" name="manhinh" value={this.state.manhinh} onChange={this.handleInputChange}/></div>
                         
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Mô tả</div>
                          <div><textarea className="textarrea" type="text" name="mota" value={this.state.mota} onChange={this.handleInputChange}/></div>
                         
                        </div>
                      </div>

                      <div className="wapperInputInsert">
                        <div className="InsertInput">
                          <div className="InsertLabel">Camera sau</div>
                          <div><input className="Inpunt" type="text" name="camerasau" value={this.state.camerasau} onChange={this.handleInputChange}/></div>
                         
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Camera trước</div>
                          <div><input className="Inpunt" type="text" name="cameratruoc" value={this.state.cameratruoc} onChange={this.handleInputChange}/></div>
                         
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">CPU</div>
                          <div><input className="Inpunt" type="text" name="CPU" value={this.state.CPU} onChange={this.handleInputChange}/></div>
                         
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">RAM</div>
                          <div><input className="Inpunt" type="text" name="RAM" value={this.state.RAM} onChange={this.handleInputChange}/></div>
                          
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">ROM</div>
                          <div><input className="Inpunt" type="text" name="ROM" value={this.state.ROM} onChange={this.handleInputChange}/></div>
                          
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Dung lượng</div>
                          <div><input type="text" className="Inpunt" name="dungluong" value={this.state.dungluong} onChange={this.handleInputChange}/></div>
                         
                        </div>
                        
                        <div className="InsertInput">
                          <div className="InsertLabel">Hệ điềuhành</div>
                          <div><input type="text" className="Inpunt" name="OS" value={this.state.OS} onChange={this.handleInputChange}/></div>
                       
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Hình ảnh</div>
                          <div><textarea className="textarrea" name="anh" value={this.state.anh} onChange={this.handleInputChange}/></div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                <div className="Click"> 
               <input className="savesub" type="submit" value="Lưu lại" onClick={this.handleEditSubmit}/>
            </div>
            <div className="changeImage">
                 <h2>Chuyển đổi ảnh</h2>
              <div className="Base64Change">
             
                  <div className="UploadInput"><input type="file" id="imageUpload"  onChange={this.encodeImageFileAsURL}/></div>
                  <div className="textareDiv">
                    <p>String Base64</p>
                    <textarea id="base64" value={this.state.image}/>
                  </div>
                 
              </div>
              
            </div></div>
            </div>
        );
    }
}