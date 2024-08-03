import React from "react";
import styles from "./columnSplit.module.css";
import { randomInt } from "crypto";

interface ITitleDescription {
  title: string;
  description: string;
}

const columnSplit = ({
  contents,
  src,
  reverse,
}: {
  contents: ITitleDescription[];
  src?: string;
  reverse?: boolean;
}) => {
  if (!src) {
    src = `/photos/${randomInt(29) + 2}.jpg`;
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${reverse ? styles.reversed : ""}`}>
        <div className={styles.content}>
          <img className={styles.sourceImage} src={"/retrowave-sunset.svg"} />
          {contents.map((x) => {
            return (
              <>
                <div className={styles.title}>{x.title}</div>
                <div className={styles.body}>{x.description}</div>
              </>
            );
          })}
        </div>
        <div className={styles.image}>
          <img
            src={src}
            style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default columnSplit;
