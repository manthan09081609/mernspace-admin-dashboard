import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Layout,
  Space,
  Typography,
} from "antd";
import { LockFilled, UserOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Credentials } from "../../types";
import { login } from "../../http/api";
import { useContext } from "react";
import NotificationContext from "../../context/notification/NotificationContext";

const { Paragraph } = Typography;

const loginUser = async (credentials: Credentials) => {
  const { data } = await login(credentials);
  return data;
};

const LoginPage = () => {
  const { open } = useContext(NotificationContext);

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      open("success", "login success");
    },
    onError: (error) => {
      console.log(error);
      open("error", error.name, error.message);
    },
  });

  return (
    <>
      <Layout
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Space direction="vertical" align="center" size={"small"}>
          <Layout.Content>
            <Paragraph
              italic={true}
              style={{
                color: "#F65F42",
              }}
            >
              E-Haat
            </Paragraph>
          </Layout.Content>

          <Card
            title={
              <Space
                style={{
                  width: "100%",
                  fontSize: 16,
                  justifyContent: "center",
                }}
              >
                <LockFilled />
                Sign In
              </Space>
            }
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <Form
              initialValues={{ remember: true }}
              onFinish={(values) => {
                mutate({ email: values.email, password: values.password });
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  {
                    type: "email",
                    message: "invalid email",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>

              <Space style={{ marginBottom: 10 }}>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  style={{ height: 10 }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a href="" id="login-form-forgot">
                  Forgot Password
                </a>
              </Space>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  loading={isPending}
                >
                  Log In
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Layout>
    </>
  );
};

export default LoginPage;
