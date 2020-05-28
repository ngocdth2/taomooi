import React from "react";
import { Bar } from "react-chartjs-2";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { withRouter } from "react-router-dom";
import './Bieudo.css';
import Axios from "axios";
export class Bieudo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoadons: [],
            products: [],
            banghoadon:[],
            ngaytao:'',
            ngaytao2:''
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/api/hoadon')
            .then(res => {
                this.setState({ hoadons: res.data.hoadons })
            })
            .catch(error => console.log(error))
            Axios.get('http://localhost:4000/api/selecthoadonchitiet')
            .then(res => {
                this.setState({ banghoadon: res.data.banghoadon })
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
        console.log(this.state.ngaytao)
        console.log(this.state.ngaytao2)
        this.changeLocation(`/MainAdmin/Bieudotheongay/${this.state.ngaytao}`)
    }
    changeLocation(link) {
        window.location=link ;
      }
      TinhTongtien(){
        let b = this.state.banghoadon.map(banghoadon => banghoadon.Tongtien)
        let tong=0
        for(let i=0; i<b.length; i++){
            tong=tong+b[i]
        }
        return tong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
    }
    render() {
        let b = this.state.banghoadon.map(banghoadon => banghoadon.Tongtien)
        let a = this.state.banghoadon.map(banghoadon => banghoadon.masp)
     //   let ngay = this.state.banghoadon.filter(item=>item.ngaytao>)
        return (
            <div className="WapperBieudo">
                <h1>Thống kê</h1>
               
            <div className="Timtheongaytao">
                <button className="Kieuchu" onClick={()=>this.changeLocation(`/MainAdmin/ThongkeText`)}>Kiểu chữ</button>
               
            </div>
                <div className="Bieudocot">
                    <Bar
                        data={{
                            labels: a,
                            datasets: [
                                {
                                    label: "VND",
                                    backgroundColor: [
                                        "#3e95cd",
                                        "#8e5ea2",
                                        "#3cba9f",
                                        "#e8c3b9",
                                        "#c45850",
                                        "#3e95cd",
                                        "#8e5ea2",
                                        "#3cba9f",
                                        "#e8c3b9",
                                        "#c45850",
                                        "#3e95cd",
                                        "#8e5ea2",
                                        "#3cba9f",
                                        "#e8c3b9",
                                        "#c45850",
                                        "#3e95cd",
                                        "#8e5ea2",
                                        "#3cba9f",
                                        "#e8c3b9",
                                        "#c45850",
                                    ],
                                    data: b
                                }
                            ]
                        }}
                        options={{
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Thống kê doanh số theo sản phẩm"
                            }
                        }} /></div>
                <h2 className="ttBieudo">Tông tiền: {this.TinhTongtien()}</h2>
                <div className="Bieudođuongi">
                    <h3>Thống kê doanh số theo ngày</h3>
                    <ResponsiveContainer className="chart" height={300}>
                        <LineChart
                            width={600}
                            height={300}
                            data={this.state.hoadons}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis dataKey="ngaytao" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Tongtien" stroke="#8884d8" activeDot={{ r: 8 }} />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}
export default withRouter(Bieudo);
