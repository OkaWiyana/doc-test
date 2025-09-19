import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Mudah Digunakan",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        API Kocek dirancang agar mudah diintegrasikan. Mulai dari setup hingga
        request pertama, semuanya cepat dan simpel.
      </>
    ),
  },
  {
    title: "Fokus pada Bisnis Anda",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Dengan API Kocek, Anda bisa fokus pada pengembangan aplikasi dan logika
        bisnis, sementara kami menangani transaksi dan keamanannya.
      </>
    ),
  },
  {
    title: "Dukungan untuk Developer",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        API Kocek sepenuhnya berbasis teknologi modern, mudah di-extend, dan
        dilengkapi dokumentasi lengkap agar developer dapat langsung produktif.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.heading}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
