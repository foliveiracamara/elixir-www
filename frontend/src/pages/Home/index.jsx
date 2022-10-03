import Hero from './Hero';
import Geolocation from './Geolocation';
import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Hero /> */}
      <Geolocation />
    </div>
  );
}
