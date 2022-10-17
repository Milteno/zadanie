import styles from './Wrapper.module.scss';

const Wrapper = props => {
  return (
    <div className={styles.wrapper}>
      <main className={styles['form-wrapper']}>
        <img className={styles.logo} alt="logo" src='/logo1.png'></img>
        {props.children}
      </main>
    </div>
  );
};

export default Wrapper;