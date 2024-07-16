import React from "react";
import styles from "./columnSplit.module.css";

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
  src: string;
  reverse?: boolean;
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${reverse ? styles.reversed : ''}`}>
        <div className={styles.content}>
          <img
            className={styles.sourceImage}
            src={"/retrowave-sunset.svg"}
          />
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
          <img src={src} style={{ height: "150%", width: "150%" }} />
        </div>
      </div>
    </div>
  );
};

export default columnSplit;
