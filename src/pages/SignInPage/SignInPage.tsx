import { Button, Form, FormProps, Image, Input } from "antd";
import * as S from "./SignInPage.styled";
import authenImg from "../../assets/images/authen.png";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

const SignInPage = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <S.Container>
      <S.WrapperLeftContent>
        <div className="sign-in">
          <h1>Xin chao,</h1>
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

            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
          <p className="blue">Quên mật khẩu?</p>
          <p>
            Chưa có tài khoản?{" "}
            <span className="blue" onClick={() => navigate("/sign-up")}>
              Tạo tài khoản
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

export default SignInPage;
