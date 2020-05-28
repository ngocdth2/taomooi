import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Dangnhap from './Sign/Dangnhap';
import Dangky from './Sign/Dangky';
import App from './App';
import PhoneDD from './Sections/PhoneDD';
import Phone from './Sections/Phone';
import MainAdmin from './Admin/MainAdmin';
import Hoadon from './Sections/Hoadon';
import { Listnhacungcap } from './Sections/Listnhacungcap';
import { HoaDonTG } from './Sections/HoaDonTG';
import { TimSP } from './Sections/TimSP';
import { Products02} from './ProductstheoGia/Products02';
import { Product24} from './ProductstheoGia/Product24';
import Products47 from './ProductstheoGia/Products47';
import { Product517} from './ProductstheoGia/Product517';
import { Productstren15} from './ProductstheoGia/Productstren15';
import { SxthapCao} from './ProductstheoGia/SxthapCao';
import { SPCaoThap} from './ProductstheoGia/SPCaothap';
import { Cart } from './GioHang/Cart';
class ChonGally extends React.Component {
   render() {
      return (
          <Router>
              <Route exact path="/" component={App} />
              <Route path="/Dangnhap" component={Dangnhap} />
              <Route path="/Dangky" component={Dangky} />
              <Route path="/PhoneDD" component={PhoneDD} />
              <Route path="/Phone/:id" component={Phone}/>
              <Route path="/Hoadon/:id" component={Hoadon}/>
              <Route path="/HoaDonTG/:id" component={HoaDonTG}/>
              <Route path="/Listnhacungcap/:id" component={Listnhacungcap}/>
              <Route path="/MainAdmin" component={MainAdmin}/>
              <Route path="/Products02" component={Products02}/>
              <Route path="/Product24" component={Product24}/>
              <Route path="/Products47" component={Products47}/>
              <Route path="/Product517" component={Product517}/>
              <Route path="/Productstren15" component={Productstren15}/>
              <Route path="/SxthapCao" component={SxthapCao}/>
              <Route path="/SPCaoThap" component={SPCaoThap}/>
              <Route path="/Cart" component={Cart}/>
              <Route path="/Cart/:id" component={Cart }/>
              <Route path="/TimSP/:id" component={TimSP }/>
              
          </Router>
        
      );
   }
}
export default ChonGally;
