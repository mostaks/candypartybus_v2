import React from "react";
import styles from "./columnVideo.module.css";

interface IMultiTextContent {
  title: string;
  body: string;
  subtitle?: string;
  subtitleBody?: string;
  bulletPoints?: string[];
}

const columnVideo = ({
  content,
  src,
}: {
  content: IMultiTextContent;
  src: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.video}>
          <video className={styles.videoControl} src={src} controls />
        </div>
        <div className={styles.content}>
          <img
            style={{
              width: "25%",
              marginTop: 60,
              marginBottom: 20,
            }}
            src={"/palm-trees.svg"}
          />
          <div className={styles.title}>{content.title}</div>
          <div className={styles.body}>{content.body}</div>
          {content.subtitle && (
            <div className={styles.title}>{content.subtitle}</div>
          )}
          {content.subtitle && (
            <div className={styles.body}>{content.subtitleBody}</div>
          )}
          <ul
            className={styles.body}
            style={{ marginTop: 20, paddingLeft: 50 }}
          >
            {content.bulletPoints &&
              content.bulletPoints.map((x) => (
                <li style={{ lineHeight: "30px" }}>{`${x}`}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default columnVideo;
