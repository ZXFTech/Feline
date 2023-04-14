import React, { CSSProperties, useEffect, useState } from "react";
import { flushSync } from "react-dom";

interface Props {
  content: string[];
  typingSpace?: number;
  typingCompleteSpace?: number;
  className?: string;
  style?: CSSProperties;
}

const Typewriter = ({
  className,
  style,
  content,
  typingSpace = 100,
  typingCompleteSpace = 1000,
}: Props) => {
  const [copyString, setCopyString] = useState("");
  const [isAdd, setIsAdd] = useState(true);
  const [index, setIndex] = useState(-1);
  let timer;

  const typing = (isAddCopy, indexCopy, delay) => {
    timer = setTimeout(() => {
      let target = isAddCopy
        ? copyString.concat(content[indexCopy].charAt(copyString.length))
        : copyString.substring(0, copyString.length - 1);
      setCopyString((pre) => target);
    }, delay);
  };

  useEffect(() => {
    if (content.length) {
      if (copyString.length === 0) {
        let targetIndex = index === content.length - 1 ? 0 : index + 1;
        typing(true, targetIndex, typingSpace);
        setIsAdd(true);
        setIndex(targetIndex);
      } else if (copyString.length === content[index].length) {
        typing(false, index, typingCompleteSpace);
        setIsAdd(false);
      } else {
        typing(isAdd, index, typingSpace);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [copyString]);

  return (
    <div className={className} style={style}>
      {copyString}
    </div>
  );
};

export default Typewriter;
