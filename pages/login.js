import {Button, Form, Input} from 'antd';
import React, {useEffect} from 'react';
import styles from "styles/login.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {_getLoading, login, setLoading} from "store";
import {useRouter} from "next/router";

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const isLoading = useSelector(_getLoading)
    const onFinish = (values) => {
        dispatch(setLoading(true))
        setTimeout(() => {
            dispatch(login({
                username: values?.username,
                password: values?.password,
                router: router
            }))
        }, 3000)
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
