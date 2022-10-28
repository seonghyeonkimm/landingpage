import Image from "next/image";
import * as React from "react";

import bannerImage from "src/assets/banner.png";

import * as styles from "./Banner.css";

function Banner() {
  return (
    <article className={styles.article}>
      <div className={styles.circle} />
      <div>
        <h2 className={styles.h2}>
          Integrate with your
          <br />
          favorite tools
        </h2>
        <p className={styles.p}>
          Connect RegiM with your most favorite sales and marketing tools
        </p>
      </div>
      <Image
        src={bannerImage}
        alt="Many Companies are using our solution"
        className={styles.image}
      />
    </article>
  );
}

export default Banner;
