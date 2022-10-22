import AppBar from "src/components/AppBar";
import Banner from "src/components/Banner";
import Footer from "src/components/Footer";
import MainContent from "src/components/MainContent";
import Strengths from "src/components/Strengths";

import * as styles from "./index.css";

function MainPage() {
  return (
    <section className={styles.section}>
      <AppBar />
      <MainContent />
      <Strengths />
      <Banner />
      <Footer />
    </section>
  );
}

export default MainPage;
