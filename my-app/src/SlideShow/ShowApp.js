import React from 'react';
import './ShowApp.css';

import Slideshow from './SlideShow';
import img1 from '../images/background-origin.jpg';
import img2 from '../images/banner-quang-cao-dien-thoai-dep_103211368.jpg';
import img3 from '../images/Banner-website-1348x492px.png';
import img4 from '../images/qr-payment-2.jpg';
import img5 from '../images/ff6ff713-d652-4091-a338-b5439f0464ed_cover-nextpay.jpg';
import img6 from '../images/big-huawei-800-170-800x170.png';

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption six" },
];

export default class ShowApp extends React.Component {
  render() {
    return (
     
        <Slideshow
          input={collection}
          ratio={`7:2`}
          mode={`automatic`}
          timeout={`5000`}
        />
    );
  }
}