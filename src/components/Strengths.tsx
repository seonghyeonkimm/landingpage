import * as React from "react";
import Image from "next/image";

import videoImage from "src/assets/video.png";
import Feature1 from "src/assets/feature-1.svg";
import Play from "src/assets/play-icon.svg";

import * as styles from "./Strengths.css";

type Props = {};

function Strengths(props: Props) {
  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>All-in-one Event Platform</h1>
      <p className={styles.p}>Deliver an exceptional event experience</p>
      <div className={styles.imageWrapper}>
        <Image alt="Macbook Pro" src={videoImage} className={styles.image} />
        <button className={styles.playButton}>
          <Play className={styles.playIcon} />
          See it in action (2 min)
        </button>
      </div>
      <section className={styles.featureWrapper}>
        <StrengthItem
          title="Event Metrics"
          description="Track your ticket sales, attendees count and more with much ease."
          icon={<Feature1 />}
        />
        <StrengthItem
          variant="secondary"
          title="Registration & Ticketing"
          description="Manage your Event registrations and ticket sales easier and receive payments instantly."
          icon={<Feature1 />}
        />
        <StrengthItem
          title="Event Metrics"
          description="Track your ticket sales, attendees count and more with much ease."
          icon={<Feature1 />}
        />
        <StrengthItem
          variant="secondary"
          title="Registration & Ticketing"
          description="Manage your Event registrations and ticket sales easier and receive payments instantly."
          icon={<Feature1 />}
        />
        <StrengthItem
          title="Event Metrics"
          description="Track your ticket sales, attendees count and more with much ease."
          icon={<Feature1 />}
        />
        <StrengthItem
          variant="secondary"
          title="Registration & Ticketing"
          description="Manage your Event registrations and ticket sales easier and receive payments instantly."
          icon={<Feature1 />}
        />
      </section>
    </article>
  );
}

type ItemProps = styles.FeatureIconVariants & {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function StrengthItem({ icon, title, description, variant }: ItemProps) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon({ variant })}>
        <span className={styles.featureIconSvg}>{icon}</span>
      </div>
      <div className={styles.featureContent}>
        <h2 className={styles.featureTitle}>{title}</h2>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default Strengths;
