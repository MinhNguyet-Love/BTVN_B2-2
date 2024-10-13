import express from 'express';
import morgan from 'morgan';
import rootRouter from './routes/root.mjs';
// Khởi tạo biến app
const app = express();

// Thiết lập view engine là EJS
app.set('view engine', 'ejs');
app.set('views', './views');
//
app.use(express.static('public'))
// Sử dụng morgan để log request
app.use(morgan("combined"));

// Sử dụng router
app.use("/", rootRouter);

// Khởi động server
app.listen(3000, () => {
    console.log("Server started!!");
});