import React, { useState } from "react";
import styles from "./styles.module.scss";

const HeaderTopLine = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <img src="/images/logo.png" className={styles.logo} />
        <div className={styles.links}>
          <a href="https://f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Home Port
          </a>
          <a href="https://web3fashionmanifesto.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Web3 Fashion manifesto
          </a>
          <a href="https://docs.f3manifesto.xyz" className={styles.link} target="_blank" rel="noreferrer">
            Documentation
          </a>
          <a href="https://themanifest.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            The Manifest Gallery
          </a>
          <a href="https://web3cc0openlibrary.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Web3 CC0 Open Library
          </a>
        </div>
        <button className={styles.mobileBtn} onClick={() => setShow(!show)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      {show && (
        <div className={styles.mobileWrapper}>
          <div className={styles.links}>
            <a href="https://f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
              DOCUMENTATION
            </a>
            <a href="https://web3fashionmanifesto.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
              Web3 Fashion manifesto
            </a>
            <a href="https://docs.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
              Documentation
            </a>
            <a href="https://themanifest.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
              The Manifest Gallery
            </a>
            <a href="https://web3cc0openlibrary.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
              Web3 CC0 Open Library
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderTopLine;
