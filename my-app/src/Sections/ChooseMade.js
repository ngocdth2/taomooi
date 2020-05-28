import React from 'react';
import './ChooseMade.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import axios from 'axios';

export default class ChooseMade extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            nhacungcaps: [],
         
        }
        this.changeLocation = this.changeLocation.bind(this);
      };
      componentWillMount() {
        axios.get('http://localhost:4000/api/hang')
        .then(res => {
          this.setState({nhacungcaps:res.data.nhacungcaps});
        })
       .catch(error => console.log(error));
      };
      changeLocation(link) {
        window.location=link ;
      }
      
    render(){
        return(
            <div className="wapperchooose"> 
            <div className="grid-container">
                {this.state.nhacungcaps.map(item=>{   
                    return(
                    <div className="grid-item" key={item.mancc}
                            onClick={()=> this.changeLocation(`/Listnhacungcap/${item.mancc}`)}>{item.tenncc}
                     </div>)
                     })}
            </div> 
            <div className="grid-container11">
                <div className="grid-item11">Chọn mức giá:</div>
                <div className="grid-item11" onClick={()=> this.changeLocation(`/Products02`)}>Dưới 2 triệu</div>
                <div className="grid-item11" onClick={()=>this.changeLocation(`/Product24`)}>Từ 2-4 triệu</div>
                <div className="grid-item11" onClick={()=>this.changeLocation(`/Products47`)}>Từ 4-7 triệu</div>
                <div className="grid-item11" onClick={()=>this.changeLocation(`/Product517`)}>Từ 7-15 triệu</div>
                <div className="grid-item11" onClick={()=>this.changeLocation(`/Productstren15`)}>Trên 15 triệu</div>
                <div className="grid-item11" id="dropdownlist">
                    Sắp xếp<ArrowDropDownIcon/>
                    <ul className="drop">
                        <li onClick={()=> this.changeLocation(`/`)}>Nổi bật nhất</li>
                        <li onClick={()=> this.changeLocation(`/SxthapCao`)}>Từ thấp đến cao</li>
                        <li onClick={()=>this.changeLocation(`/SPCaoThap`)}>Từ cao đến thấp</li>
                    </ul>
                </div>
            </div> 
           
            </div>
        );
    }
}