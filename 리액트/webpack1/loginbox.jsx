const React =require('react')
const {Component} = React

class LoginBox extends Component{
    state ={
        userid:'',
        userpw:''
    }
    hendleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
        // [e.target.name]-> 선택한 녀석의 이름을 가져온다 input naem="userid"
    }
    hendleSubmit=(e)=>{
        e.preventDefault()
        this.props.onCreate(this.state) //선택값을 넘겨주고 리셋시킨다.
        this.setState({
            userid:'',
            userpw:'',
        })
    }
    render(){
        return(
            <form>
                <input 
                type="text"
                placeholder="아디입력요망"
                value={this.state.userid}
                onChange={this.hendleChange}
                name="userid"
                />
                <input 
                type="password"
                placeholder="비번입력요망"
                value={this.state.userpw}
                onChange={this.hendleChange}
                name="userpw"
                />
                <button type="submit">로그인</button>
            </form>
        )
    }
}
module.exports = LoginBox // .jsx형식으로 내보낸다.