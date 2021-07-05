const path = require('path') //node.js 기본내장되있는 녀석

module.exports ={
    name:'ingoo',
    mode:'development',//production 개발용도? //서비스용도?
    devtool:'eval',//hidden-source-map 발표?
    
    //입력받을 내용들
    entry:{
        app:['./index.jsx']
    },
    
    // 내가 파일을 읽어서 어떻게 보내줄거냐 내보낼 내용들
    output:{
        path:path.join(__dirname,'dist'),//현재 디렉토리 + dist까지 
        filename:'app.js'
    }
}