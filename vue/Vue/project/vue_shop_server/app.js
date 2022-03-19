const express = require('express')
const app = express()

//一定要放在静态资源托管前面，否则不会生效
app.use(compression())
app.use(express.static('./dist'))

app.listen(80,()=>{
    console.log('server running http://127.0.0.1')
})