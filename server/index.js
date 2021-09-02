const express = require('express')
const app = express()
const router = require('./router')
// post请求表单数据
app.use(express.urlencoded({ extended: true }))

// 资源共享
const cors = require('cors')
app.use(cors());

// 静态文件托管0 ---- 访问：http:localhost:8888/图片.jpg
app.use(express.static('upload'))

// 路由
app.use('/', router)

app.listen(8888, () => {
    console.log(8888);
})