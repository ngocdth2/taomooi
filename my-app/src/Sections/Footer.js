import React from 'react';
import './Footer.css';
import anh3 from '../images/ATM+WEB.png';
import anh1 from '../images/Visa-logo-2014-white.png';
import anh2 from '../images/mastercard-logo-2016-000-600x315-cropped.jpg';
import anh4 from '../images/4277836_upload_2018-4-2_14-46-17.png';
class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div className="first-Footer">
                    <div className="column1">
                        <p>Giới thiệu về công ty</p>
                        <p>Hệ thống của hàng</p>
                        <p>Câu hỏi thường gặp khi mua hàng</p>
                        <p>Quy chế hoạt động</p>
                        <p>Tin khuyến mãi</p>
                    </div>
                    <div className="column1">
                        <p>Hưỡng dẫn mua hàng online</p>
                        <p>Hướng dẫn mua trả góp</p>
                        <p>Chính sách đổi trả</p>
                        <p>Chính sách bảo hành</p>
                        <p>Giao hàng và thanh toán</p>
                    </div>
                    <div className="column2">
                        <p >Tư vẫn hỗ trợ mua hàng</p>
                        <p id="column1-red">1800 6601</p>
                        <p>Tư vấn hỗ trợ bảo hành</p>
                        <p id="column1-red">1800 1062</p>
                    </div>
                    <div className="column2">
                        <p>Hỗ Trợ Thanh toán</p>
                        <p id="column2-anh"><img src={anh1} alt="visa"/><img src={anh2} alt="mastercard"/><img src={anh3} alt="atm"/></p>
                        <p id="anhbct"><img src={anh4} alt="anh4"/></p>
                    </div>
                </div>
                <div className="Second-Footer">
                    <p>©2020 Công ty cổ phần Thế Giới Di Động GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh</p>
                    <p>Điện thoại: 18001060, Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Trần Nhật Linh. Xem chính sách sử dụng web</p>
                </div>
            </div>
        );
    }
}
export default Footer;