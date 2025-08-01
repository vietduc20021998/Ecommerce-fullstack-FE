import { Button, Form, FormProps, Image, Input } from "antd";
import * as S from "./SignUpPage.styled";
import authenImg from "../../assets/images/authen.png";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username: string;
  password: string;
  confirmPassword: string;
};
const SignUpPage = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <S.Container>
      <S.WrapperLeftContent>
        <div className="sign-in">
          <h1>Tạo tài khoản,</h1>
          <p>Nhập email và mật khẩu tài khoản</p>
          <Form onFinish={onFinish} autoComplete="off" className="custom-form">
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="form-item-custom"
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="form-item-custom"
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              className="form-item-custom"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Enter your password again" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
          <p>
            Ban da co tai khoan?{" "}
            <span className="blue" onClick={() => navigate("/sign-in")}>
              Dang nhap
            </span>
          </p>
        </div>
      </S.WrapperLeftContent>
      <S.WrapperRightContent>
        <Image src={authenImg} preview={false} />
      </S.WrapperRightContent>
    </S.Container>
  );
};

export default SignUpPage;
