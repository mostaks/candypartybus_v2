import React from "react";
import styles from "./divider.module.css";

export enum SplitSide {
  WeirdRight = "WeirdRight",
  WeirdLeft = "WeirdLeft",
}

const divider = ({
  splitSide,
  title,
  body,
  cta,
}: {
  splitSide: SplitSide;
  title?: string;
  body?: string;
  cta?: string;
}) => {
  return (
    <div className={styles.container}>
      {splitSide === SplitSide.WeirdLeft ? (
        <>
          <div className={styles.weirdShapeReversed}>
            {title && <div className={styles.title}>{title}</div>}
            {body && <div className={styles.body}>{body}</div>}
            {cta && <a className={styles.cta} href={`tel:${cta}`} rel="noreferrer noopener">{cta}</a>}
          </div>
          <div className={styles.bottomRow} />
        </>
      ) : (
        <>
          <div className={styles.weirdShape}>
            {title && <div className={styles.title}>{title}</div>}
            {body && <div className={styles.body}>{body}</div>}
            {cta && <a className={styles.cta} href={`tel:${cta}`} rel="noreferrer noopener">{cta}</a>}
          </div>
          <div className={styles.bottomRow} />
        </>
      )}
    </div>
  );
};

export default divider;
