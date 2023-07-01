import React from 'react';
import Image from 'next/image';

import styles from '../styles/HomePage.module.css';

export default function AboutComponent() {
  return (
    <main className={styles.main}>
      <Image
        src="https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-11_044127919.jpg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={1000}
        height={240}
        priority
      />
      <h1>About page</h1>

      <div className="container">container</div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}