import React, {useState} from "react";
import {FormField, InputPassword} from "@metro-ui/core";
import {Input} from "@metro-ui/core";
import {Text} from "@metro-ui/core";
import {Button} from "@metro-ui/core";
import {login} from "../api/auth"
import {useDispatch} from 'react-redux'
import {setJWT} from "../redux/authSlice";
import {useNavigate} from "react-router-dom";


function LoginForm() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [forgotToEnterUser, setForgotToEnterUser] = useState(false);
    const [forgotToEnterPassword, setForgotToEnterPassword] = useState(false);


    const dispatch = useDispatch();

    function handleUserChange(e: any) {
        setUser(e.target.value);
    }

    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();
    async function handleLogin() {
        if (user === "") setForgotToEnterUser(true);
        else setForgotToEnterUser(false);
        if (password === "") setForgotToEnterPassword(true);
        else setForgotToEnterPassword(false);

        let JWTString = await login(user, password);
        if (JWTString) {
            dispatch(setJWT(JWTString));
            localStorage.setItem("user", JWTString);
            navigate("/todos");
        }

    }

    return (
        <>
            <FormField
                htmlFor="email"
                label={<b>Email</b>}
            >
                <Input
                    iconLabel="Search"
                    id="email"
                    name="email"
                    onChange={handleUserChange}
                    placeholder="Enter your Email"
                    type="text"
                    value={user}
                />
                {forgotToEnterUser &&
                    <Text
                        color="danger"
                        element="span"
                        size="small"
                    >
                        Please enter your Email
                    </Text>
                }
            </FormField>

            <FormField
                htmlFor="password"
                label={<b>Password</b>}
                link="Forgot Password?"
            >
                <InputPassword
                    iconLabel="Search"
                    id="password"
                    name="password"
                    showLabel="Show Password"
                    hideLabel="Hide Password"
                    onChange={handlePasswordChange}
                    value={password}
                />
                {forgotToEnterPassword &&
                    <Text
                        color="danger"
                        element="span"
                        size="small"
                    >
                        Please enter your Password
                    </Text>
                }
            </FormField>

            <Button
                onClick={handleLogin}
            >
                Login
            </Button>
        </>
    );
}

export default LoginForm;