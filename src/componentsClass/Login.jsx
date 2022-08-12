import React from "react";
import { Form, InputText, Button } from "../componentsClass/styleComponents/LoginStyled";

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            pass: ''
        }
    }

    handleUser = (e) => {
        this.setState({
            user:e.target.value
        })
    }

    handlePass = (e) => {
        this.setState({
            pass:e.target.value
        })
    }
    
    loginControl = () => {
        this.state.user === 'admin' && this.state.pass === 'admin' ? this.props.setIsLoggedIn(true) : alert("Username or Password is incorrect ")       
    } 

    render(){    
        return(
            <Form>
                <h2>Login Form</h2>
                <div>
            
                    <label ><b>Username</b></label>
                    <InputText value={this.state.user} onChange={this.handleUser} type="text" placeholder="Enter Username" />

                    <label ><b>Password</b></label>
                    <InputText value={this.state.pass} onChange={this.handlePass} type="password" placeholder="Enter Password"/>
                        
                    <Button onClick={this.loginControl} >Login</Button>
                
                </div>
            </Form>
        )
    }
}

export default Login;