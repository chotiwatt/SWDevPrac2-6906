import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <header className={styles.banner}>
      <div>
        <p className={styles.smallTitle}>VENUE EXPLORER</p>
        <h1>Find a place for your special day</h1>
        <p className={styles.description}>Choose a venue and give it a rating that you like.</p>
      </div>
    </header>
  );
}
