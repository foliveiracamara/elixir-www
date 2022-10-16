import Hero from './Hero';
import Geolocation from './Geolocation';
import LastNews from '../../pages/Home/LastNews'
import SectionHome from './SectionHome';
import BlueCardsList from '../../components/BlueCardsList';
import Sponsors from './Sponsors';
import Footer from './Footer';
import Infos from './Infos';

import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <SectionHome/>
      <Infos />
      <Geolocation />
      <Sponsors/>
      <LastNews />
      <Footer/>
    </div>
  );
}
