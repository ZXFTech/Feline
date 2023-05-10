import React, { useState } from "react";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import NeuInput from "../NeuContainer/NeuInput";
import NeuButton from "../NeuContainer/NeuButton";

import styles from "./index.module.scss";
import { login, register } from "@/api/user";
import { message } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <NeuContainer
      visualHeight={8}
      intensity={20}
      className={styles["login-container"]}
      type="protuberant"
      border
    >
      <div className={styles["login-part"]}>
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
          value={email}
          before="邮箱"
          onChange={(value) => {
            setEmail(value);
          }}
        />
        <NeuButton
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
        </NeuButton>
      </div>
      <div className={styles["register-part"]}></div>
    </NeuContainer>
  );
};

export default Login;
