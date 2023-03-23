import React, {useState} from "react";
import {FormField, Heading, InputPassword, Layout, Modal, ModalContent} from "@metro-ui/core";
import {Input} from "@metro-ui/core";
import {Text} from "@metro-ui/core";
import {Button} from '@metro-ui/core';
//import register from "../api/register";
import {register} from "../api/auth";

function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [forgotToEnterName, setForgotToEnterName] = useState(false);
    const [forgotToEnterUser, setForgotToEnterUser] = useState(false);
    const [forgotToEnterPassword, setForgotToEnterPassword] = useState(false);

    const [showSuccessModal, setShowSuccessModal] = useState(false);


    function handleNameChange(e: any) {
        // console.log(e.target.value);
        setName(e.target.value);
    }


    function handleUserChange(e: any) {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: any) {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    async function handleSignup(e: any) {
        if (name === "") setForgotToEnterName(true);
        else setForgotToEnterName(false);
        if (email === "") setForgotToEnterUser(true);
        else setForgotToEnterUser(false);
        if (password === "") setForgotToEnterPassword(true);
        else setForgotToEnterPassword(false);

        if (name !== "" && email !== "" && password !== "") {
            const resp = await register(name, email, password);
            if (resp) {
                setShowSuccessModal(true);
            }
            else {
                //setErrorModal
            }

        }
    }


    return (
        <>
            <FormField
                htmlFor="name"
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
                htmlFor="email"
                label={<b>Email</b>}
            >
                <Input
                    iconLabel="Search"
                    id="email"
                    name="email"
                    onChange={handleUserChange}
                    placeholder="Enter your email"
                    type="text"
                    value={email}
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
                onClick={handleSignup}
            >
                Sing up
            </Button>

            <Modal
                aria-labelledby="modal-title"
                isOpen={showSuccessModal}
            >
                <ModalContent
                    direction="column"
                    padding="xx-large"
                    spacing="medium"
                >
                    <Heading
                        align="center"
                        hasNoNativeMargin
                        id="modal-title"
                    >
                        Your account has been created
                    </Heading>
                    <Layout
                        grow={0}
                        justify="center"
                    >
                        <Button variant="secondary" onClick={() => {
                            setShowSuccessModal(false)
                        }}>
                            Great!
                        </Button>
                    </Layout>
                </ModalContent>
            </Modal>
        </>
    );
}

export default RegisterForm;