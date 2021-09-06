import React from "react";

type BasicPageTypes = {
  data: {
    header: string;
    content: string[];
  };
  leadingImg?: {
    src: string;
    alt: string;
    title?: string;
    profile?: boolean;
  };
};

export const BasicPage = (props: BasicPageTypes) => {
  const header = <h1>{props.data.header}</h1>;
  const content = props.data.content.map((paragraph) => <p>{paragraph}</p>);

  return (
    <>
      <div id="basic-page">
        <h1>{header}</h1>
        {props.leadingImg ? (
          <img
            className={
              props.leadingImg.profile ? "leading-img profile" : "leading-img"
            }
            src={props.leadingImg.src}
            alt={props.leadingImg.alt}
            title={props.leadingImg.title}
          />
        ) : null}
        <div>{content}</div>
      </div>
    </>
  );
};
