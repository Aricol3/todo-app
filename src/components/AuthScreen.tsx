import React from "react";
import {Layout, TabGroup, Tabs, Tab, TabPanels, TabPanel, Card} from '@metro-ui/core';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthScreen() {
    return (
        <>
            <Card elevation="xx-large">
                <TabGroup label="Login and Sign Up Form" id="login-form">
                    <Tabs>
                        <Tab name="login">Login</Tab>
                        <Tab name="signup">Sign Up</Tab>
                    </Tabs>
                    <TabPanels>
                        <TabPanel name="login">
                            <Layout spacing="medium" direction="column">
                                <LoginForm/>
                            </Layout>
                        </TabPanel>
                        <TabPanel name="signup">
                            <Layout spacing="medium" direction="column">
                                <RegisterForm/>
                            </Layout>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </Card>
        </>
    );
}

export default AuthScreen;