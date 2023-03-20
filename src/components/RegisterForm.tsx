import React, {useState} from "react";
import {FormField, InputPassword} from "@metro-ui/core";
import {Input} from "@metro-ui/core";
import {Text} from "@metro-ui/core";
import {Button} from '@metro-ui/core';

function RegisterForm() {

    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [forgotToEnterName, setForgotToEnterName] = useState(false);
    const [forgotToEnterUser, setForgotToEnterUser] = useState(false);
    const [forgotToEnterPassword, setForgotToEnterPassword] = useState(false);


    function handleNameChange(e: any) {
        // console.log(e.target.value);
        setName(e.target.value);
    }


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
                label={<b>Name</b>}
            >
                <Input
                    iconLabel="Search"
                    id="name"
                    name="name"
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    type="text"
                    value={name}
                />
                {forgotToEnterName &&
                    <Text
                        color="danger"
                        element="span"
                        size="small"
                    >
                        Please enter your Name
                    </Text>
                }
            </FormField>

            <FormField
                htmlFor="username"
                label={<b>Username or email</b>}
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
                    console.log(name, user, password);
                    if (name === "") setForgotToEnterName(true);
                    else setForgotToEnterName(false);
                    if (user === "") setForgotToEnterUser(true);
                    else setForgotToEnterUser(false);
                    if (password === "") setForgotToEnterPassword(true);
                    else setForgotToEnterPassword(false);
                }}
            >
                Sing up
            </Button>
        </>
    );
}

export default RegisterForm;