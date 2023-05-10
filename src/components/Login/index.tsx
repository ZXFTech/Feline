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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    console.log("isRegister", isRegister);
  }, [isRegister]);

  return (
    <NeuContainer className={styles["login-container"]}>
      <NeuButton onClick={() => setIsRegister(!isRegister)}>切换</NeuButton>
      <NeuContainer
        type="protuberant"
        visualHeight={8}
        intensity={20}
        border
        className={styles["login-window"]}
      >
        <div
          className={`${styles["login"]} ${
            isRegister ? styles["register"] : ""
          }`}
        >
          <div className={style["image"]}>
            <img src={zheng} alt="test" className={styles["zheng"]} />
          </div>
          <div className={style["input"]}>
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
            {/* <NeuInput
            value={email}
            before="邮箱"
            onChange={(value) => {
              setEmail(value);
            }}
          /> */}
          </div>

          <div className={style["image"]}>
            <img src={tang} alt="test" className={styles["tang"]} />
          </div>
          <div className={style["input"]}>
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
            {/* <NeuInput
            value={email}
            before="邮箱"
            onChange={(value) => {
              setEmail(value);
            }}
          /> */}
          </div>

          {/* <NeuButton
          onClick={() => {
            setLoading(true);
            if (!username || !password) {
              message.error("用户名和密码不能为空!");
              return;
            }
            login(username, password)
              .then((res) => {
                console.log("res", res);
              })
              .catch((err) => {
                console.log("err", err);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
          loading={loading}
        >
          登录
        </NeuButton>
        <NeuButton
          loading={loading}
          onClick={() => {
            setLoading(true);
            if (!username || !password) {
              message.error("用户名和密码不能为空!");
              setLoading(false);
              return;
            }
            register({ username, password, email })
              .then((res) => {
                console.log("res", res);
              })
              .catch((err) => {
                console.log("err", err);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          注册
        </NeuButton> */}
        </div>
      </NeuContainer>
    </NeuContainer>
  );
};

export default Login;
