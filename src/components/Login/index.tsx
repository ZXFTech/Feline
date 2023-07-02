import React, { useEffect, useState } from "react";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import NeuInput from "../NeuContainer/NeuInput";
import NeuButton from "../NeuContainer/NeuButton";

import styles from "./index.module.scss";
import { login, register } from "@/api/user";
import { message } from "antd";

import zheng from "@/assets/login/zheng.jpg";
import tang from "@/assets/login/tang.jpg";
import { useDispatch } from "react-redux";
import { login as reduxLogin } from "@/redux/theme/userSlice";
import { useNavigate } from "react-router-dom";
import { FUser } from "@/types/user";
import { setCache } from "@/utils/browser";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [hide, setHide] = useState(false);

  const [isRegister, setIsRegister] = useState(false);

  const userLogin = () => {
    setLoading(true);
    login(username, password)
      .then((res) => {
        dispatch(reduxLogin(res.data.user));
        setCache("userInfo", res.data.user);
        navigate("/");
      })
      .catch((err) => {
        message.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userRegister = () => {
    setLoading(true);
    register({
      username,
      password,
      email,
    } as FUser)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <NeuContainer className={styles["login-container"]}>
      <NeuButton
        onClick={() => {
          // setAnime(!anime);
          setIsRegister(!isRegister);
        }}
      >
        切换
      </NeuButton>
      <NeuContainer
        type="protuberant"
        visualHeight={6}
        intensity={40}
        border
        className={styles["login-window"]}
      >
        <div className={`${styles["register"]}`}>
          <NeuInput
            value={username}
            before="用户名"
            onChange={(value) => {
              setUsername(value);
            }}
          />
          <NeuInput
            value={password}
            inputType="password"
            before="密码"
            onChange={(value) => {
              setPassword(value);
            }}
          />
          <NeuInput
            className={`${
              isRegister ? styles["appear"] : styles["disappear"]
            } ${hide ? styles["hide"] : ""}`}
            value={registerConfirmPassword}
            inputType="password"
            before="确认密码"
            onChange={(value) => {
              setRegisterConfirmPassword(value);
            }}
          />
          <NeuInput
            className={`${
              isRegister ? styles["appear"] : styles["disappear"]
            } ${hide ? styles["hide"] : ""}`}
            value={email}
            before="邮箱"
            onChange={(value) => {
              setEmail(value);
            }}
          />
        </div>
        <div
          className={`${styles["buttons"]} ${
            isRegister ? style["register-button"] : null
          }`}
        >
          <NeuButton
            className={!isRegister ? styles["hide"] : null}
            onClick={userRegister}
          >
            注册
          </NeuButton>
          <NeuButton
            className={isRegister ? styles["hide"] : null}
            onClick={userLogin}
          >
            登录
          </NeuButton>
          {isRegister ? (
            <div className={styles["welcome"]}>
              欢迎~,如果你已经有账号了，可以直接 <span>登录</span>
            </div>
          ) : (
            <div className={styles["welcome"]}>
              欢迎~,如果你还没有账号,可以点此 <span>注册</span>
            </div>
          )}
        </div>
      </NeuContainer>
    </NeuContainer>
  );
};

export default Login;
