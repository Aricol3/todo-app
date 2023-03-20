import React, {useState} from "react";
import {FormField, InputPassword} from "@metro-ui/core";
import {Input} from "@metro-ui/core";
import {Text} from "@metro-ui/core";
import {Button} from '@metro-ui/core';

function LoginForm() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [forgotToEnterUser, setForgotToEnterUser] = useState(false);
    const [forgotToEnterPassword, setForgotToEnterPassword] = useState(false);


    function handleUserChange(e: any) {
        // console.log(e.target.value);
        setUser(e.target.value);
    }

    function handlePasswordChange(e: any) {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }


    return (
        <>
            <FormField
                htmlFor="username"
                label={<b>Username or email</b>}
                link="Forgot Username?"
            >
                <Input
                    iconLabel="Search"
                    id="username"
                    name="username"
                    onChange={handleUserChange}
                    placeholder="Enter your username or email"
                    type="text"
                    value={user}
                />
                {forgotToEnterUser &&
                    <Text
                        color="danger"
                        element="span"
                        size="small"
                    >
                        Please enter your Username or email
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
                isBeforeValidationCallback={function noRefCheck() {
                }}
                isWaitingCallback={function noRefCheck() {
                }}
                onClick={() => {
                    console.log(user, password);
                    if (user === "") setForgotToEnterUser(true);
                    else setForgotToEnterUser(false);
                    if (password === "") setForgotToEnterPassword(true);
                    else setForgotToEnterPassword(false);
                }}
            >
                Login
            </Button>
        </>
    );
}

export default LoginForm;