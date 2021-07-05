//자바스크립트 파일인데 리액트를 쓸때 확장자를 jsx로 쓴다한다 필수는아님
//"dev":"webpack" //npm run dev 실행할거다 어떤걸 webpack
const React =require('react')
const ReactDOM = require('react-dom')

class App extends React.Component{
    render(){
        return(
            <div>Hello WebPack!!!!</div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

