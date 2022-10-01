import Hero from './components/Hero';
import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
