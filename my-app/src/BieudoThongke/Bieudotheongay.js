import React from "react";
import { withRouter } from "react-router-dom";
import './Bieudo.css';
import Axios from "axios";
export class Bieudotheongay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoadons: [],
            products: [],
            banghoadon:[],
            ngaytao1:'',
            ngaytao2:''
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/api/hoadon')
            .then(res => {
                this.setState({ hoadons: res.data.hoadons })
            })
            .catch(error => console.log(error))
      
        Axios.get('http://localhost:4000/api/products')
            .then(res => {
                this.setState({ products: res.data.products })
            })
            .catch(error => console.log(error))
    }
    OnchangeInput=(e)=>{
        let target = e.target
        let value= target.value
        let name=  target.name
        this.setState({[name]: value})

    }
    Timngaytao=()=>{
        console.log(this.state.ngaytao1)
        console.log(this.state.ngaytao2)
    }
    render() {
     //   let ngay = this.state.banghoadon.filter(item=>item.ngaytao>)
        return (
            <div className="WapperBieudo">
                <h1>Thống kê</h1>

            </div>
        );
    }
}
export default withRouter(Bieudotheongay);
