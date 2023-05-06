import React, { ReactNode, useState } from "react";
import NeuContainer from "../NeuContainer";

import style from "./index.module.scss";
import { FTag } from "@/types/blogs";
import NeuButton from "../NeuContainer/NeuButton";
import NeuInput from "../NeuContainer/NeuInput";

interface Props {
  tags: FTag[];
  color?: string;
  setTags: (tags: FTag[]) => void;
}

const Tag = ({ tags, setTags, color }: Props) => {
  const [add, setAdd] = useState(false);
  const [newTag, setNewTag] = useState("");

  const onNewTagAdded = () => {
    setAdd(false);

    if (!tags.some((value) => value.name === newTag)) {
      setTags([
        ...tags,
        {
          name: newTag,
        },
      ]);
    }
    setNewTag("");
  };

  return (
    <div className={style["tag-container"]}>
      {tags.map((tag) => (
        <NeuContainer
          className={style.tag}
          type="protuberant"
          visualHeight={1}
          style={{ color }}
          radius={50}
          key={tag.name}
        >
          {tag.name}
        </NeuContainer>
      ))}
      {!add ? (
        <>
          <NeuButton
            size="large"
            className={style["add-button"]}
            onClick={() => {
              setAdd(true);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </NeuButton>
        </>
      ) : (
        <NeuInput
          className={style["tag-input"]}
          value={newTag}
          onChange={(value) => setNewTag(value)}
          after={
            <>
              <NeuButton
                size="small"
                className={style["tag-input-button"]}
                onClick={onNewTagAdded}
              >
                <i className="fa-solid fa-check" />
              </NeuButton>
              <NeuButton
                size="large"
                className={style["tag-input-button"]}
                onClick={() => {
                  setAdd(false);
                }}
              >
                <i className="fa-solid fa-xmark" />
              </NeuButton>
            </>
          }
        />
      )}
    </div>
  );
};

export default Tag;
