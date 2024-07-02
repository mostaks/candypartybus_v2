import React from "react";
import styles from "./columnSplit.module.css";

interface ITitleDescription {
  title: string;
  description: string;
}

const columnSplit = ({
  contents,
  src,
}: {
  contents: ITitleDescription[];
  src: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.content}>
          <img src={"/temp-horizon.png"} />
          {contents.map((x) => {
            return (
              <>
                <h2 style={{ color: "rgb(234, 31, 228)" }}>{x.title}</h2>
                <p>{x.description}</p>
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
