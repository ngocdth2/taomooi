const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors())

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user_sanpham',
  password: '123456',
  database: 'baocao'
});

connection.connect(function(err){
  (err) ? console.log(err) : console.log(connection);
});
app.get('/api/products', (req, res) => {
  var sql = "SELECT * FROM sanpham INNER JOIN nhacungcap ON sanpham.mancc = nhacungcap.mancc";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({products: results});
  });
});

app.get('/api/hang', (req, res) => {
  var sql = "SELECT * FROM nhacungcap";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({nhacungcaps: results});
  });
});
app.get('/api/hoadon', (req, res) => {
  var sql = "SELECT * FROM banghoadon";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({hoadons: results});
  });
});
app.get('/api/selecthoadonchitiet', (req, res) => {
  var sql =`SELECT * FROM banghoadon,chitiethoadon WHERE banghoadon.mahd = chitiethoadon.mahd `;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({banghoadon: results});
  });
});
app.get('/api/selecthoadonchitiettheongay/:mahd', (req, res) => {
  var sql =`SELECT * FROM banghoadon WHERE mahd=${req.params.mahd}`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({banghoadon: results});
  });
});
app.get('/api/sptheohang/:mancc', (req, res) => {
 
  var sql = `SELECT * FROM sanpham, nhacungcap WHERE sanpham.mancc = nhacungcap.mancc and nhacungcap.mancc=${req.params.mancc} and nhacungcap.mancc=${req.params.mancc}`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({products: results});
  });
});
app.get('/api/Timsptheohang/:tensp', (req, res) => {
 
  var sql = `SELECT * FROM sanpham WHERE tensp LIKE '%${req.params.tensp}%'`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({products: results});
  });
});
app.get('/api/khachhang', (req, res) => {
  var sql = "SELECT * FROM khachang";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({khachhang: results});
  });
});
app.get('/api/Selectchitiethoadon/:mahd', (req, res) => {
  var sql = `SELECT * FROM chitiethoadon WHERE mahd=${req.params.mahd}`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({chitiethoadon: results});
  });
});
app.get('/api/SelectUser', (req, res) => {
  var sql = "SELECT * FROM nguoidung, role where nguoidung.id_Role = role.id_Role";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({users: results});
  });
});
app.get('/api/selecttheogiasp', (req, res) => {
  var sql =`SELECT * FROM sanpham WHERE giasp BETWEEN 0 AND 2000000`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.get('/api/sanphamtu2den4', (req, res) => {
  var sql =`SELECT * FROM sanpham WHERE giasp BETWEEN 2000000 AND 4000000`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.get('/api/timsanpham47', (req, res) => {
  var sql =`SELECT * FROM sanpham WHERE giasp BETWEEN 4000000 AND 7000000`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.get('/api/selectsanphamtu7den15', (req, res) => {
  var sql =`SELECT * FROM sanpham WHERE giasp BETWEEN 7000000 AND 15000000`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.get('/api/timsptren15', (req, res) => {
  var sql =`SELECT * FROM sanpham WHERE giasp BETWEEN 15000000 AND 45000000`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.get('/api/sapxeptuthapdencao', (req, res) => {
  var sql =`SELECT * FROM sanpham ORDER BY giasp ASC`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.get('/api/sanphamcaotoitap', (req, res) => {
  var sql =`SELECT * FROM sanpham ORDER BY giasp DESC`;
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.post('/api/deletesanpham', (req, res) => {
  var sql ="DELETE FROM sanpham "
  + "WHERE masp='"+req.body.masp+"'";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.post('/api/deletenhacungcap', (req, res) => {
  var sql ="DELETE FROM nhacungcap "
  + "WHERE mancc='"+req.body.mancc+"'";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({nhacungcap: results});
  });
});
app.post('/api/deletekhachhang', (req, res) => {
  var sql ="DELETE FROM khachang "
  + "WHERE makh='"+req.body.makh+"'";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({khachhang: results});
  });
});
app.post('/api/deletehoadon', (req, res) => {
  var sql ="DELETE FROM banghoadon "
  + "WHERE mahd='"+req.body.mahd+"' ";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({hoadons: results});
  });
});
app.post('/api/deletechitiethoadon', (req, res) => {
  var sql ="DELETE FROM chitiethoadon "
  + "WHERE mahd='"+req.body.mahd+"' and masp='"+req.body.masp+"' ";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({chitiethoadon: results});
  });
});
app.post('/api/insert', function(req, res) { 
  var sql = "INSERT "
          + "INTO sanpham(tensp,giasp,mancc,soluong,mausac,rating,manhinh,OS,camerasau,cameratruoc,CPU,RAM,ROM,dungluong,mota,anh) "
          + "VALUES('"
          +   req.body.tensp + "','" 
          +   req.body.giasp + "','" 
          +   req.body.mancc + "','" 
          +   req.body.soluong+ "','" 
          +   req.body.mausac + "','" 
          +   req.body.rating + "','" 
          +   req.body.manhinh+ "','" 
          +   req.body.OS + "','" 
          +   req.body.camerasau+ "','" 
          +   req.body.cameratruoc + "','" 
          +   req.body.CPU + "','" 
          +   req.body.RAM+ "','" 
          +   req.body.ROM + "','" 
          +   req.body.dungluong+ "','" 
          +   req.body.mota+ "','" 
          +   req.body.anh +"')";
          connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({sanpham: results});
  });
});
app.post('/api/insertnhacungcap', function(req, res) { 
  var sql = "INSERT "
          + "INTO nhacungcap(tenncc,diachi,email,sodt) "
          + "VALUES('"
          +   req.body.tenncc + "','" 
          +   req.body.diachi + "','" 
          +   req.body.email + "','" 
          +   req.body.sodt +"')";
          connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({nhacungcap: results});
  });
});
app.post('/api/insertkhachhang', function(req, res) { 
  var sql = "INSERT "
          + "INTO khachang(tenkh,sodt,email,Quequan)"
          + "VALUES('"
          +   req.body.tenkh + "','" 
          +   req.body.sodt + "','" 
          +   req.body.email + "','" 
          +   req.body.Quequan +"')";
          connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({khachhang: results});
  });
});
app.post('/api/inserthoadon', function(req, res) { 
  var sql = "INSERT "
          + "INTO banghoadon(mahd,makh,ngaytao,Tongtien)"
          + "VALUES('"
          +   req.body.mahd + "','" 
          +   req.body.makh + "','" 
          +   req.body.ngaytao + "','" 
          +   req.body.Tongtien +"')";
          connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({hoadon: results});
  });
});
app.post('/api/insertchitiethoadonhoadon', function(req, res) { 
  var sql = "INSERT "
          + "INTO chitiethoadon(mahd,masp,soluong) "
          + "VALUES('"
          +   req.body.mahd + "','" 
          +   req.body.masp + "','" 
          +   req.body.soluong +"')";
          connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({chitiethoadon: results});
  });
});
app.post('/api/edit', (req, res) => {
  var sql = "UPDATE sanpham SET "
  +   "tensp='"+req.body.tensp+"',"
  +   "giasp='"+req.body.giasp+"',"
  +   "mausac='"+req.body.mausac+"',"
  +   "soluong='"+req.body.soluong+"',"
  +   "mancc='"+req.body.mancc+"'," 
  +   "manhinh='"+req.body.manhinh+"',"
          +   "rating='"+req.body.rating+"',"
          +   "camerasau='"+req.body.camerasau+"',"
          +   "cameratruoc='"+req.body.cameratruoc+"',"
          +   "CPU='"+req.body.CPU+"',"
          +   "ROM='"+req.body.ROM+"',"
          +   "RAM='"+req.body.RAM+"',"
          +   "dungluong='"+req.body.dungluong+"',"
          +   "mota='"+req.body.mota+"',"
          +   "OS='"+req.body.OS+"',"
          +   "anh='"+req.body.anh+"'"
          + "WHERE masp='"+req.body.masp+"'";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({sanpham: results});
  });
});
app.post('/api/editnhacungcap', (req, res) => {
  var sql = "UPDATE nhacungcap SET "
  +   "tenncc='"+req.body.tenncc+"',"
  +   "diachi='"+req.body.diachi+"',"
  +   "email='"+req.body.email+"',"
          +   "sodt='"+req.body.sodt+"'"
          + "WHERE mancc='"+req.body.mancc+"'";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({nhacungcap: results});
  });
});
app.listen(4000, () => console.log('App listening on port 4001'));
