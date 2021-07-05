//자바스크립트 파일인데 리액트를 쓸때 확장자를 jsx로 쓴다한다 필수는아님
//"dev":"webpack" //npm run dev 실행할거다 어떤걸 webpack

// const React =require('react')
// const ReactDOM = require('react-dom')
// const LoginBox = require('./loginbox.jsx')
// const {Component} = React

import React,{Component} from 'react' //장점 변수 두가지 동시설정가능
import ReactDOM from 'react-dom'
import LoginBox from './loginbox'
// express에서 확장자 없이 가능했는데 왜 여기서는 안되나?  찾아봐라 찾앗는데 없으면 오류
// import = const React = 동일 from = require 'react'=동일
// import 이용해서 const 대신 이런식으로 할 수 있다.
// import << javascript varsion nodejs x
// require << nodejs 처리가 되는아이

class App extends Component{
    render(){
        return(
            <>
            <div>안녕하모니카asdkjashdkjasdh</div>
            <div>??왜 안바뀌지??</div>
            <LoginBox/>
            </>
        )
    }
}

ReactDOM.render(
   <App/>,
    document.querySelector('#root')
)

