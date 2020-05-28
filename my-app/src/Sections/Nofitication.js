import React from 'react';
import './Nofitication.css'
import HighlightOff from '@material-ui/icons/HighlightOff';
export default class Nofitication extends React.Component{

    render(){
        return(
                <div className="Molde" id="Model">
                    <div className="kind">
                      <h3>Loại điện thoại</h3>
                      <p><input type="checkbox"/>Điện thoại phổ thông</p>
                      <p><input type="checkbox"/>Android</p>
                      <p><input type="checkbox"/>Iphone(IOS)</p>
                    </div>
                    <div className="metarial">
                      <h3>Chất liệu</h3>
                      <p><input type="checkbox"/>Nhựa</p>
                      <p><input type="checkbox"/>Kim loại</p>
                      <p><input type="checkbox"/>Kính</p>
                    </div>
                    <div className="highlight" id="hight"><HighlightOff/></div>
                    <div className="screen-kind">
                      <h3>Kiểu màn hình</h3>
                      <p><input type="checkbox"/>Tai thỏ</p>
                      <p><input type="checkbox"/>Giọt nước</p>
                      <p><input type="checkbox"/>Tràn viềm</p>
                    </div>
                    <div className="specialfeatures">
                      <h3>Các tính năng đặc biệt</h3>
                      <p><input type="checkbox"/>Bảo mật khuôn mặt</p>
                      <p><input type="checkbox"/>Bảo mật vân tay</p>
                      <p><input type="checkbox"/>Pin khủng (>3000mAH)</p>
                    </div>
                </div>
        );
    }
}