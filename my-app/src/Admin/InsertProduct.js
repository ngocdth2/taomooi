import React from 'react';
import './InsertProduct.css';
import axios from 'axios';
import { withRouter,Link } from 'react-router-dom';
import Calendar from '@material-ui/icons/CalendarViewDay';
import AccountCricle from '@material-ui/icons/AccountCircle';
var data = JSON.parse(localStorage.getItem('User'))
 class InserProduct extends React.Component{ 
    constructor (props) {
        super(props);
        this.state = {
          Users: data ? data : [],
          nhacungcaps:[],
          sanpham: [],
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
        this.handleInsertSubmit =this.handleInsertSubmit.bind(this);
        this.encodeImageFileAsURL=this.encodeImageFileAsURL.bind(this); 
      }
      changeLocation(link) {
        window.location=link ;
      }
      handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      console.log(value)
      };
      handleInsertSubmit (event){
        if (this.state.Users.length !== 0) {
          if (this.state.tensp !== "" && this.state.mancc !== "" && this.state.soluong !== "" && this.state.giasp !== ""
            && this.state.manhinh !== "" && this.state.mausac !== "" && this.state.CPU !== "" && this.state.camerasau !== ""
            && this.state.cameratruoc !== "" && this.state.OS !== "" && this.state.anh !== "" && this.state.mota !== ""
            && this.state.dungluong !== "" && this.state.RAM !== "" && this.state.ROM !== "") {
            event.preventDefault();
            document.getElementById('smalltb').style.display = 'block'
            document.getElementById('InsertTB').style.display = 'block'
            const productItem = {
              masp: '',
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
              RAM: this.state.RAM,
              ROM: this.state.ROM,
              dungluong: this.state.dungluong,
              mota: this.state.mota,
              anh: this.state.anh,
            }
            axios.post('http://localhost:4000/api/insert', productItem)
              .then(res => {
                let sanpham = this.state.sanpham;
                sanpham = [productItem, ...sanpham];
                this.setState({ sanpham: sanpham });

                document.getElementById('smalltb').style.display = 'block'
                document.getElementById('InsertTB').style.display = 'block'

              })
              .catch(error => console.log(error));
          }
          else {
            alert("Vui lòng nhập đầy dủ thông tin")
          }
        }
        else {
          alert("Mời bạn đăng nhập")
          this.changeLocation(`/Dangnhap`)
        }
      };
      HandleOK=()=>{
        window.location.reload();
        document.getElementById('smalltb').style.display='none'
        document.getElementById('InsertTB').style.display='none'
        
      }
      encodeImageFileAsURL(e){
        var seft = this;
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          seft.setState({image: reader.result})
        }
        reader.readAsDataURL(file);
      }
      componentDidMount() {
        axios.get('http://localhost:4000/api/hang')
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
            <div className="InserProduct"><div className="Calll" id="Call"><Calendar id="IconOpen" onClick={this.OnpenMain} /></div>
              <div className="dropdown1">
                       
                        <AccountCricle  onClick={this.OnSumbit} id="iconAccount" />
                        <ul id="Onclicksignout">
                           
                              <Link to="/Product"><li>thông tin cá nhân</li></Link>
                             <Link to="/InsertProduct"><li>thông báo</li></Link>
                                <Link to="/Dangnhap"><li onClick={this.DangXuathethong}>Đăng xuất</li></Link>
                        </ul>
                    </div>
                <div className="Pro" onClick={this.onClickcancel}>
                    <h1>THÊM SẢN PHẨM</h1>
                    <div id="imgTest"></div>
                    <div className="wapperInsert">
                      <div className="wapperInputInsert">
                        <div className="InsertInput">
                          <div className="InsertLabel">Tên sản phẩm</div>
                          <div><input type="text" className="Inpunt" name="tensp" onChange={this.handleInputChange} value={this.state.tensp}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Giá sản phẩm</div>
                          <div><input type="text" className="Inpunt" name="giasp" value={this.state.giasp} onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Mã nhà cung cấp</div>
                          <div>
                          <select name="mancc" className="styleselect" onChange={this.handleInputChange}>
                        {this.state.nhacungcaps.map(item => {
                          return (
                            <option key={item.mancc} name="mancc" value={item.mancc}>{item.tenncc}</option>

                          )
                        })}
                      </select>
                            </div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Số lượng</div>
                          <div><input type="text" className="Inpunt" name="soluong" value={this.state.soluong} onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Màu sắc</div>
                          <div><input type="text" className="Inpunt" name="mausac" value={this.mausac} onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Rating</div>
                          <div><input type="text" className="Inpunt" value={this.state.rating} name="rating" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Màn hình</div>
                          <div><input type="text" className="Inpunt" value={this.state.manhinh} name="manhinh" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Mô tả</div>
                          <div><textarea className="textarrea" type="text" value={this.state.mota} name="mota" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                      </div>

                      <div className="wapperInputInsert">
                        <div className="InsertInput">
                          <div className="InsertLabel">Camera sau</div>
                          <div><input type="text" className="Inpunt" value={this.state.camerasau} name="camerasau" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Camera trước</div>
                          <div><input type="text " className="Inpunt" value={this.state.cameratruoc} name="cameratruoc" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">CPU</div>
                          <div><input type="text" className="Inpunt" value={this.CPU} name="CPU" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">RAM</div>
                          <div><input type="text" className="Inpunt" value={this.state.RAM} name="RAM" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">ROM</div>
                          <div><input type="text" className="Inpunt" value={this.state.ROM} name="ROM" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Dung lượng</div>
                          <div><input type="text" className="Inpunt" value={this.state.dungluong} name="dungluong" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Hệ điều hành</div>
                          <div><input type="text" className="Inpunt" value={this.state.OS} name="OS" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                        <div className="InsertInput">
                          <div className="InsertLabel">Hình ảnh</div>
                          <div><textarea className="textarrea" type="text" value={this.state.anh} name="anh" onChange={this.handleInputChange}/></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
            </div>
              <div className="ClickInsert"> 
                <input type="submit" value="Thêm sản phẩm" onClick={this.handleInsertSubmit}></input>
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
              
            </div>
            <div className="InsertTB" id="InsertTB"> 
            </div>
            <div className="smalltb" id="smalltb">
                <p>Thêm thành công!</p>
                <input type="submit" value="OK" onClick={this.HandleOK}/>
              </div>
            </div>
        );
    }
}
export default withRouter(InserProduct);