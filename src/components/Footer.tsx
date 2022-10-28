import * as React from "react";
import Button from "./Button";

import SymbolSvg from "src/assets/symbol.svg";

import * as styles from "./Footer.css";

function Footer() {
  return (
    <article className={styles.container}>
      <div className={styles.article}>
        <section className={styles.section}>
          <h3 className={styles.h3}>Create your event with RegiM</h3>
          <p className={styles.p}>
            Leveraging our virtual and live event experience, Hubilo offers
            everything you need to set up your next hybrid event from
            registration to executing a flawless event.
          </p>
          <Button size="lg" className={styles.button}>
            Get Early Access
          </Button>
        </section>
        <div className={styles.footer}>
          <div className={styles.lineWrapper}>
            <SymbolSvg className={styles.symbol} />
            <div className={styles.line} />
          </div>
          <div className={styles.copyRightWrapper}>
            <p className={`${styles.copyRight} ${styles.firstCopyRight}`}>
              © RegiM 2022. Made with love by
              <span className={styles.highlight}> Landify</span>
            </p>
            <p className={styles.copyRight}>
              For further details, drop a mail to
              <a
                className={styles.highlight}
                href="mailto:hello@landify.design"
              >
                {" "}
                hello@landify.design
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Footer;
