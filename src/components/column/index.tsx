import React from "react";
import styles from "./column.module.css";

const column = ({
                    title,
                    description,
                    dotPoints,
                }: {
    title: string;
    description: string;
    dotPoints?: string[];
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    {description ? <p>{description}</p> : <></>}
                    {dotPoints?.length ? (
                        <ul>
                            {dotPoints.map(point => point && <li>{point}</li>)}
                        </ul>
                    ) : <></>}
                </div>
            </div>
        </div>
    );
};

export default column;
