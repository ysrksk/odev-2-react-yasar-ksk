import React, {useState} from "react";
import { Form, InputText, Button } from "./sytle-components/LoginStyled";
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';


const Login = ({setIsLoggedIn})=> {
    const [user, setUser] = useState ('');
    const [pass, setPass] = useState ('');

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const loginControl = () => {
        user === 'admin' && pass === 'admin' ? setIsLoggedIn(true) : createNotification()    
    } 

    const createNotification = () => {
        NotificationManager.warning('Username or Password is incorrect', ' ', 5000);
    }

    return(
        <Form>
            <h2>Login Form</h2>
            <div>
           
                <label ><b>Username</b></label>
                <InputText value={user} onChange={handleUser} type="text" placeholder="Enter Username" />

                <label ><b>Password</b></label>
                <InputText value={pass} onChange={handlePass} type="password" placeholder="Enter Password"/>
                    
                <Button onClick={loginControl} >Login</Button>
             
            </div>
        </Form>
    )
}

export default Login;