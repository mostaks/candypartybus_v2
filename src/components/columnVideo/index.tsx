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
          <img src={"/temp-horizon.png"} />

          <h2 style={{ color: "rgb(234, 31, 228)" }}>{content.title}</h2>
          <p>{content.body}</p>
          {content.subtitle && <h2>{content.subtitle}</h2>}
          {content.subtitle && <p>{content.subtitleBody}</p>}
          <ul>
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
