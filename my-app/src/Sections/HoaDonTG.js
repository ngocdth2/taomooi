import React from 'react';
import { withRouter } from 'react-router-dom';
import { Headers } from '../Headers';
import Axios from 'axios';
import './HoaDonTG.css';
import anh1 from '../images/congtytaichinhs.png';
import anh2 from '../images/cardtaichinh.png';
import anh3 from '../images/homecredit.png';
import anh4 from '../images/feca.png';
export class HoaDonTG extends React.Component{
constructor(props){
    super(props);
    this.state={
        products:[]
    }
    this.OnClickHandleThang6 = this.OnClickHandleThang6.bind(this)
    this.OnClickHandleThang8 = this.OnClickHandleThang8.bind(this)
    this.OnClickHandleThang9 = this.OnClickHandleThang9.bind(this)
    this.OnClickHandleThang12 = this.OnClickHandleThang12.bind(this)
    this.OnChangeHanlde=this.OnChangeHanlde.bind(this);
    this.OnChangeHanlde1=this.OnChangeHanlde1.bind(this)
}
componentDidMount(){
    Axios.get('http://localhost:4000/api/products')
    .then(res=>{
        this.setState({products: res.data.products})
    })
    .catch(error=>console.log(error)); 
}
OnClickHandleThang6(){
    document.getElementById('thang6').style.border="1px solid orangered"
    document.getElementById('thang6').style.color="blue"
    document.getElementById('thang9').style.border="1px solid #e9ebee"
    document.getElementById('thang9').style.color="black"
    document.getElementById('thang12').style.border="1px solid #e9ebee"
    document.getElementById('thang12').style.color="black"
     document.getElementById('thang8').style.border="1px solid #e9ebee"
     document.getElementById('thang8').style.color="black"
     document.getElementById('thongtinTGcty').style.display='block'
     document.getElementById('thongtinTGcty1').style.display='none'
     document.getElementById('thongtinTGcty2').style.display='none'
     document.getElementById('thongtinTGcty3').style.display='none'
}
OnClickHandleThang9(){
    document.getElementById('thang9').style.border="1px solid orangered"
    document.getElementById('thang9').style.color="blue"
    document.getElementById('thang8').style.border="1px solid #e9ebee"
    document.getElementById('thang8').style.color="black"
    document.getElementById('thang12').style.border="1px solid #e9ebee"
    document.getElementById('thang12').style.color="black"
     document.getElementById('thang6').style.border="1px solid #e9ebee"
     document.getElementById('thang6').style.color="black"
     document.getElementById('thongtinTGcty2').style.display='block'
     document.getElementById('thongtinTGcty1').style.display='none'
     document.getElementById('thongtinTGcty').style.display='none'
     document.getElementById('thongtinTGcty3').style.display='none'
}
OnClickHandleThang12(){
    document.getElementById('thang6').style.border="1px solid #e9ebee"
    document.getElementById('thang6').style.color="black"
    document.getElementById('thang9').style.border="1px solid #e9ebee"
    document.getElementById('thang9').style.color="black"
    document.getElementById('thang8').style.border="1px solid #e9ebee"
    document.getElementById('thang8').style.color="black"
     document.getElementById('thang12').style.border="1px solid orangered"
     document.getElementById('thang12').style.color="blue"
     document.getElementById('thongtinTGcty3').style.display='block'
     document.getElementById('thongtinTGcty1').style.display='none'
     document.getElementById('thongtinTGcty2').style.display='none'
     document.getElementById('thongtinTGcty').style.display='none'
}
OnClickHandleThang8(){
    document.getElementById('thang6').style.border="1px solid #e9ebee"
    document.getElementById('thang6').style.color="black"
    document.getElementById('thang9').style.border="1px solid #e9ebee"
    document.getElementById('thang9').style.color="black"
    document.getElementById('thang12').style.border="1px solid #e9ebee"
    document.getElementById('thang12').style.color="black"
     document.getElementById('thang8').style.border="1px solid orangered"
     document.getElementById('thang8').style.color="blue"
     document.getElementById('thongtinTGcty1').style.display='block'
     document.getElementById('thongtinTGcty').style.display='none'
     document.getElementById('thongtinTGcty2').style.display='none'
     document.getElementById('thongtinTGcty3').style.display='none'  
}
OnChangeHanlde(){
    document.getElementById('thetindungTG').style.borderLeft="1px solid blue"
    document.getElementById('thetindungTG').style.borderTop="2px solid blue"
    document.getElementById('contytcTG').style.borderRight="0px solid blue"
    document.getElementById('contytcTG').style.borderTop="0px solid blue"
}
OnChangeHanlde1(){
    document.getElementById('thetindungTG').style.borderLeft="0px solid blue"
    document.getElementById('thetindungTG').style.borderTop="0px solid blue"
    document.getElementById('contytcTG').style.borderRight="1px solid blue"
    document.getElementById('contytcTG').style.borderTop="2px solid blue"
}
render(){
    console.log(this.state.products.find(product => product.masp ));
    const item = this.state.products.find(product => product.masp === +this.props.match.params.id)
      console.log(item)
    return(
        <div className="wallTG">
            <Headers/>
               {item?(<div className="wapperTG"> 
                <div className="TitleTG">
                     <div className="imageLogo"><img src={item.anh} alt="anh "/></div>
                    <div className="thongtinsptg">
                        <p>Mua trả góp <span>Điện thoại {item.tensp}</span></p>
                        <p><span>Giá sản phẩm</span></p>
                        <p><span> chi tiết khuyến mãi</span></p>
                        <p><span>Sử dụng mã giảm giá</span></p>
                    </div>
                    <div className="giaSPtg">
                         <p className="giaspTG">{item.giasp}đ</p>
                    </div>
            </div>
              <div className="wapperTitleTG"> 
              <div className="wapper1cty" id="contytcTG" onClick={this.OnChangeHanlde1}>
                    <div className="logocongtytaichinh"><img src={anh1} alt={anh1}/> </div>
                    <div className="titlectytaichinh"> <p> CÔNG TY TÀI CHÍNH</p></div>
                </div>
                <div className="wapper1cty" id="thetindungTG" onClick={this.OnChangeHanlde}>
                    <div className="logocongtytaichinh"><img src={anh2} alt={anh2}/> </div>
                    <div className="titlectytaichinh"> <p> QUA THẺ TÍN DỤNG</p></div>
                </div>
              </div>
              <div className="GoiTG">
                  <p>Các kỳ hạn có gói trả góp 0% - 1%: 6 tháng, 8 tháng</p>
                  <p>Chọn các tháng trả góp</p>
                  <div className="ChonThangTG">
                      <div className="thangOneTG" id="thang6" onClick={this.OnClickHandleThang6}>6 tháng</div>
                      <div className="thangOneTG" id="thang8" onClick={this.OnClickHandleThang8}>8 tháng</div>
                      <div className="thangOneTG" id="thang9" onClick={this.OnClickHandleThang9}>9 tháng</div>
                      <div className="thangOneTG" id="thang12" onClick={this.OnClickHandleThang12}>12 tháng</div>
                  </div>
              </div>
              <div className="thongtinTGcty" id="thongtinTGcty">
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc" id="tenctTG">Tên công ty</div>
                        <div  className="namectytc" id="tenctTG2"><img src={anh3} alt="anh3"/></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giá sản phẩm</div>
                         <div className="namectytc">{item.giasp}đ</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Lãi suất</div>
                        <div className="namectytc">0%</div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giấy tờ cần có</div>
                        <div className="namectytc">CMND + bằng lái xe/ sổ hộ khẩu</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Góp mỗi tháng</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Tổng tiền phải trả</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Chênh lệch với giá đặt mua</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc" id="datmuaTG"></div>
                        <div className="namectytc" id="datmuaTG2"><button>Đặt Mua</button>
                            
                        </div>
                    </div>
              </div>

              <div className="thongtinTGcty1" id="thongtinTGcty1">
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc" id="tenctTG">Tên công ty</div>
                        <div  className="namectytc" id="tenctTG2"><img src={anh3} alt="anh3"/></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giá sản phẩm</div>
                         <div className="namectytc">{item.giasp}đ</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Lãi suất</div>
                        <div className="namectytc">0%</div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giấy tờ cần có</div>
                        <div className="namectytc">CMND + bằng lái xe/ sổ hộ khẩu</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Góp mỗi tháng</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Tổng tiền phải trả</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Chênh lệch với giá đặt mua</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc" id="datmuaTG"></div>
                        <div className="namectytc" id="datmuaTG2"><button>Đặt Mua</button>
                            
                        </div>
                    </div>
              </div>
              <div className="thongtinTGcty2" id="thongtinTGcty2">
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc" id="tenctTG">Tên công ty</div>
                        <div  className="namectytc" id="tenctTG2"><img src={anh3} alt="anh3"/></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giá sản phẩm</div>
                         <div className="namectytc">{item.giasp}đ</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Lãi suất</div>
                        <div className="namectytc">5.42% / 3.22%</div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giấy tờ cần có</div>
                        <div className="namectytc">CMND + bằng lái xe/ sổ hộ khẩu</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Góp mỗi tháng</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Tổng tiền phải trả</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Chênh lệch với giá đặt mua</div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc" id="datmuaTG"></div>
                        <div className="namectytc" id="datmuaTG2"><button>Đặt Mua</button>
                            
                        </div>
                    </div>
              </div>
              <div className="thongtinTGcty3" id="thongtinTGcty3">
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc" id="tenctTG">Tên công ty</div>
                        <div  className="namectytc" ><img src={anh3} alt="anh3"/></div>
                        <div  className="namectytc" id="tenctTG2"><img src={anh4} alt="anh3"/></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giá sản phẩm</div>
                         <div className="namectytc">{item.giasp}đ</div>
                         <div className="namectytc">{item.giasp}đ</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Lãi suất</div>
                        <div className="namectytc">5.42% / 3.22%</div>
                        <div className="namectytc">2.92% / 1.66%</div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Giấy tờ cần có</div>
                        <div className="namectytc">CMND + bằng lái xe/ sổ hộ khẩu</div>
                        <div className="namectytc">CMND + Bằng lái /Hộ khẩu + Hóa đơn điện</div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Góp mỗi tháng</div>
                        <div className="namectytc"></div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc">Tổng tiền phải trả</div>
                        <div className="namectytc"></div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty" id="soleTG">
                        <div className="namectytc">Chênh lệch với giá đặt mua</div>
                        <div className="namectytc"></div>
                        <div className="namectytc"></div>
                    </div>
                    <div className="tencongty">
                        <div className="namectytc" id="datmuaTG"></div>
                        <div className="namectytc" ><button>Đặt Mua</button></div>
                        <div className="namectytc" id="datmuaTG2"><button>Đặt Mua</button>
                        </div>
                    </div>
              </div>
            </div> ):null}
        </div>
    );
}
}
export default withRouter(HoaDonTG);