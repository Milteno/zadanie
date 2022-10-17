import styles from './TextField.module.scss';

const TextField = (props) => {
  console.log(props);
    return <input className={styles.inputText} {...props} />
};

export default TextField;