import Image from "next/image";
import styles from "/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${styles.footerContainer} | padding-inline padding-block-bottom`}
    >
      <p className="fs-xs-secondary-heading">Powered by</p>
      <a
        href="https://www.themoviedb.org/about/logos-attribution"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={"/assets/icon-tmdb.svg"}
          width={200}
          height={30}
          alt="powered by TMDB"
          unoptimized
        />
      </a>
    </footer>
  );
};

export default Footer;
