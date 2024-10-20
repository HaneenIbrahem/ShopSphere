import styles from './HealthSafetyBanner.module.css';

const HealthSafetyBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContent}>
        <h2>In store or online your health & safety is our top priority</h2>
        <p>The only supermarket that makes your life easier, makes you enjoy life, and makes it better.</p>
      </div>
      <div className={styles.imageContent}>
        {/* Insert any image or illustration here */}
        <img src="src/assets/imgs/promo.png" alt="Health and safety illustration" />
      </div>
    </div>
  );
};

export default HealthSafetyBanner;
