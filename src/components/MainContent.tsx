import * as React from "react";
import Image from "next/image";

import mainImage from "src/assets/main-image.png";

import Button from "./Button";

import * as styles from "./MainContent.css";

function MainContent() {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <section className={styles.leftContainer}>
          <h1 className={styles.h1}>Event Registration Reimagined</h1>
          <p className={styles.p}>
            Manage your event registrations hassle free and without any
            dependency with the technical team. Isn’t it sounds amazing?
          </p>
          <Button type="button" size="lg" className={styles.button}>
            Get Early Access
          </Button>
        </section>
        <section className={styles.rightContainer}>
          <div className={styles.circle} />
          <Image
            alt="Event Registration Reimagined Landing Page"
            src={mainImage}
          />
        </section>
      </article>
    </main>
  );
}

export default MainContent;
