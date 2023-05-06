import React, { useState } from "react";

import style from "./index.module.scss";
import NeuContainer from "../NeuContainer";
import NeuInput from "../NeuContainer/NeuInput";
import NeuButton from "../NeuContainer/NeuButton";

import styles from "./index.module.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
          value={userName}
          before="用户名"
          onChange={(value) => {
            setUserName(value);
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
        <NeuButton
          onClick={() => {
            console.log("登录");
          }}
        >
          登录
        </NeuButton>
      </div>
      <div className={styles["register-part"]}></div>
    </NeuContainer>
  );
};

export default Login;
