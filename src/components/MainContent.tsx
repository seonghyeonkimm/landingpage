import * as React from "react";

type Props = {};

function MainContent(props: Props) {
  return (
    <main>
      <article>
        <section>
          <h1>Title</h1>
          <p>Descriptions</p>
          <button>Get Early Access</button>
        </section>
        <section>Images</section>
      </article>
    </main>
  );
}

export default MainContent;
