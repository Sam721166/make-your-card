import React from "react";
import style from "./code.module.css";
import { FiSave, FiUpload, FiDownload, FiCode } from "react-icons/fi";

export default function Code({newName, newTitle, newEmail, newX}) {
  return (
    <div className={style.cardWrapper}>
      {/* Top Header */}
      <div className={style.header}>
        <div className={style.dots}>
          <span className={`${style.dot} ${style.red}`}></span>
          <span className={`${style.dot} ${style.yellow}`}></span>
          <span className={`${style.dot} ${style.green}`}></span>
        </div>
        <p className={style.fileName}>Business Card.json</p>
      </div>

      {/* File Tab */}
      <div className={style.fileTab}>{newName}'s business Card.json</div>

      {/* Icons under File Tab */}
      <div className={style.icons}>
        <FiSave />
        <FiUpload />
        <FiDownload />
        <FiCode />
      </div>

      {/* JSON Content with line numbers */}
      <div className={style.content}>
        <pre>
          <code>
            <span className={style.line}> 
              <span className={style.lineNumber}>1</span> {"{"}
            </span>
            <span className={style.line}>
              <span className={style.lineNumber}>2</span>{" "}
              <span className={style.key}>"name":</span>{" "}
              <span className={style.string}>"{newName}"</span>
            </span>
            <span className={style.line}>
              <span className={style.lineNumber}>3</span>{" "}
              <span className={style.key}>"title":</span>{" "}
              <span className={style.string}>"{newTitle}"</span>
            </span>
            <span className={style.line}>
              <span className={style.lineNumber}>4</span>{" "}
              <span className={style.key}>"email":</span>{" "}
              <span className={style.value}>
                "{newEmail}""
              </span>
            </span>
            <span className={style.line}>
              <span className={style.lineNumber}>5</span>{" "}
              <span className={style.key}>"x":</span>{" "}
              <span className={style.string}>"{newX}"</span>
            </span>
            <span className={style.line}>
              <span className={style.lineNumber}>6</span> {"}"}
            </span>
          </code>
        </pre>
      </div>
    </div>
  );
}
