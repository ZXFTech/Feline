import NeuButton from "@/components/NeuContainer/NeuButton";
import React, { useEffect, useRef, useState } from "react";

const Interview = () => {
  const [count, setCount] = useState(0);

  const refPrevCount = useRef();

  useEffect(() => {
    refPrevCount.current = count as any;
  });

  const preCount = refPrevCount.current;

  return (
    <div>
      <h1>当前值：{count}</h1>
      <h1>上一次的值：{preCount}</h1>
      <NeuButton onClick={() => setCount(count + 1)}>增加</NeuButton>
    </div>
  );
};

export default Interview;
