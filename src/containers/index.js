import React, { useState } from "react";
import styles from "./style.module.css";

import { ActionButton } from "../components/ActionButton";
import { NumberButton } from "../components/NumberButton";

var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Main() {
  const [localState, setState] = useState(0);

  const onNumberClick = (recentNumber) => {
    console.log("number clicked", recentNumber);
  };

  const onActionClick = (recentAction) => {
    console.log("recentAction clicked", recentAction);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.display}>{123}</div>
        <div className={styles.row}>
          <div className={styles.numberContainer}>
            {listOfNumbers.map((number) => (
              <NumberButton
                className={styles.numberButton}
                key={number}
                value={number}
                onClick={onNumberClick}
              />
            ))}
          </div>
          <div>
            <ActionButton
              className={styles.actionButton}
              value="+"
              displayValue="Add(+)"
              onClick={onActionClick}
            >
              {" "}
            </ActionButton>
            <ActionButton
              className={styles.actionButton}
              value="-"
              displayValue="Subtract ()"
              onClick={onActionClick}
            ></ActionButton>
            <ActionButton
              className={styles.actionButton}
              value="*"
              displayValue="Multiply (*)"
              onClick={onActionClick}
            ></ActionButton>
          </div>
        </div>
        <div className={styles.numberContainer}>
          <ActionButton
            className={`${styles.actionButton} ${styles.textCenter}`}
            value=""
            displayValue="Clear"
            onClick={onActionClick}
          >
            {" "}
          </ActionButton>
          <NumberButton
            className={styles.numberButton}
            key="0"
            value={0}
            onClick={onNumberClick}
          />

          <ActionButton
            className={`${styles.actionButton} ${styles.textCenter}`}
            value="="
            displayValue="="
            onClick={onActionClick}
          >
            {" "}
          </ActionButton>
          <ActionButton
            className={styles.actionButton}
            value="+"
            displayValue="Divide(/)"
            onClick={onActionClick}
          >
            {" "}
          </ActionButton>
        </div>
      </div>
    </>
  );
}

export default Main;
