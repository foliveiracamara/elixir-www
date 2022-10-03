import Hero from './Hero';
import Geolocation from './Geolocation';
import LastNews from '../../pages/Home/LastNews'

import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Geolocation />
      <LastNews />
    </div>
  );
}
