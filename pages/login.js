import {Button, Form, Input} from 'antd';
import React, {useState} from 'react';
import styles from "styles/login.module.scss"
import {useDispatch} from "react-redux";
import {login} from "store";
import {token} from "utils/token";

const Login = () => {
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const onFinish = (values) => {
        setLoading(true)
        setTimeout(() => {
           dispatch(login(values))
        },3000)
        setLoading(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.login}>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{width: "100%"}}
                        loading={isLoading}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;