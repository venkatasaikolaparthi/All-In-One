import React, { useState } from 'react';
import { Button, Form, Image, Input, Modal } from 'antd';

import './Login.css'

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const emailPrefix: string = email.split('@')[0];
    const domain: string = email.split('@')[1];
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);
    const emailPatternValidation = (email: string): boolean => {
        const regex = new RegExp(/<(?=>)/);
        return regex.test(email);
    };

    function validateDetails() {

    }

    function handleSubmit() {
        console.log(emailPatternValidation(email))
        if (email.length === 0) {
            setErrorMessage("");
            setMessage("Email is required");
        }
        else if (!email.includes('@') || emailPrefix === "" || domain === "" || !domain.includes('.') ||
            domain.split('.')[0] === "" || domain.split('.')[1] === "" || emailPatternValidation(email)) {
            setErrorMessage("");
            setMessage("Please enter a valid email");
        }
        else {
            setMessage("");
            setErrorMessage("");
            validateDetails();
        }
    }

    function checkInvalid(): 'success' | 'error' {
        if ((email.length === 0 || !email.includes('@') || emailPrefix === "" || domain === "" ||
            !domain.includes('.') || domain.split('.')[0] === "" || domain.split('.')[1] === "" || emailPatternValidation(email)) &&
            message.length !== 0) {
            return 'error';
        }
        return 'success';
    }

    return <>
        <Modal centered mask={false} footer={false} closable={false} open={true} width={400} >
            <div >
                <div style={{ textAlign: "center", fontWeight: "600", fontSize: "xx-large" }}>
                    Login
                </div>

                <div className="heading" />

                <div style={{ color: 'red', textAlign: 'center', position: 'relative', top: '23px' }} >
                    {errorMessage}
                </div>

                <Form onFinish={handleSubmit} layout="vertical"
                    style={{ textAlign: 'left', padding: '20px 35px 10px 35px' }}
                >
                    <Form.Item
                        label="Email"
                        validateStatus={checkInvalid()}
                        style={{ marginBottom: '20px' }}
                    >
                        <Input
                            style={{ borderRadius: '5px', width: "275px" }}
                            autoFocus
                            onChange={(e) => { setEmail(e.target.value) }}
                            size="large"
                        />
                        <div style={{ color: 'red', textAlign: 'left' }}>{message}</div>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        style={{ marginBottom: '20px' }}
                    >
                        <Input.Password
                            style={{ borderRadius: '5px', width: "275px" }}
                            onChange={(e) => { setPassword(e.target.value) }}
                            size="large"
                        />
                        <div style={{ color: 'red', textAlign: 'left' }}>{message}</div>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: '16px' }}>
                        <Button type="primary" loading={buttonLoading} className="submit-button" size="large"
                            htmlType="submit" style={{ width: "275px" }}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>

        <div className='row'>
            {
                [window.location.origin + '/Restaurant.jpg', window.location.origin + '/GeneralStore.jpg',
                window.location.origin + '/Mall.jpg', window.location.origin + '/SportsStore.jpg',
                window.location.origin + '/Park.jpg', window.location.origin + '/Garden.jpg',
                window.location.origin + '/RailwayStation.jpg', window.location.origin + '/Room.jpg',
                window.location.origin + '/BusStop.jpg', window.location.origin + '/Airpot.jpg',
                window.location.origin + '/House.jpg', window.location.origin + '/restaurant.jpg',
            ].map(key => {
                    return <div className='column'>
                        <Image src={key} width="100%" height={"110%"} />
                    </div>
                })
            }
        </div>
    </>
}

export default Login;