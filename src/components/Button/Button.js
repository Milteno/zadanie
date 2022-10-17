import styles from './Button.module.scss';

const Button = props => {
  return (<button disabled={props.disabled} className={styles.buttonForm} {...props}><img className={styles.Icon} src='/Icon.png' alt='lock'></img>button</button>);
};

  export default Button;