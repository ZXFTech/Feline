import React, { FC } from "react";
import NeuButton from "../NeuContainer/NeuButton";
import { useNavigate } from "react-router-dom";

interface Props {
  userInfo: any;
}

const Avatar: FC<Props> = ({ userInfo }) => {
  const navigate = useNavigate();

  if (userInfo) {
    return <div></div>;
  }

  return (
    <NeuButton visualHeight={5} onClick={() => navigate("/login")}>
      注册/登录
    </NeuButton>
  );
};

export default Avatar;
