import styles from './PhoneNumber.module.scss';
import TextField from '../TextField/TextField';

const PhoneNumber = props => {
  console.log('poka');
  return (
    <div className={styles.wrapper}>
    <TextField placeholder='Phone number' value={props.value} onChange={props.onChange} disabled={props.showOtp}/>
    {props.showOtp && (
       <button className={styles.button} onClick={e => props.setShowOtp(false)}>Edit number</button>
      )}
    </div>
  );
};

export default PhoneNumber;