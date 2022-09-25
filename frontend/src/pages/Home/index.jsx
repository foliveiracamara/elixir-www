import ImageCardsList from '../../components/ImageCardsList';
import styles from './style.module.scss';


export default function Home() {
  return (
    <div className={styles.container}>
      <ImageCardsList />
    </div>
  );
}
