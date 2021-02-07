import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Data , users } from "../Data";

function LoginForm(props){

    function hundleSubmit(e){
        e.preventDefault();

        for (var key in users) {
            if(props.name===users[key]['login'] && props.password===users[key]['password']){
                alert(users[key]['name']);
                props.setUserdata(users[key]['name']);
                props.setIsAuth(true);
                break;
            }
        }
        if(props.isAuth===false){
            alert("Something wrong");
        }
        
    
    }

    function handleChange(e) {
        let name;
        let password;

        if(e.target.name === "name") {
            name = e.target.value;
            props.setName(name);
        }
        else {
            password = e.target.value;
            props.setPassword(password);
        }
    }
    
    return (
        <Form onSubmit={hundleSubmit}>
        <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="name" onChange={handleChange} placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="password" placeholder="Password" />
        </Form.Group>
        <Button type="submit">SIGN IN </Button>
    </Form>
    );
}
export default LoginForm