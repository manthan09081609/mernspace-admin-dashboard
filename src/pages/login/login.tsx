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

const { Paragraph } = Typography;

const LoginPage = () => {
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
            <Form initialValues={{ remember: true }}>
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
