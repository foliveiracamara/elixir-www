import Hero from './Hero';
import Geolocation from './Geolocation';
import LastNews from '../../pages/Home/LastNews'

import styles from './style.module.scss';
import SectionHome from './SectionHome';
import BlueCardsList from '../../components/BlueCardsList';
import Sponsors from './Sponsors';
import Footer from './Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <SectionHome/>
      <Geolocation />
      <Sponsors/>
      <LastNews />
      <Footer/>
    </div>
  );
}
