import styles from './OtpName.module.scss';
import TextField from '../TextField/TextField';
import { useState, useEffect } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';

const OtpName = () => {
  const [timer, setTimer] = useState(180);
  useEffect(() => {

    const count = setInterval(() => {
      setTimer((old) => {
        if(old === 0) {
          clearInterval(count);
          return old;
         }
         return old-1;
        })
    },1000)
    return () => {
      clearInterval(count);
    }
  },[] )

  return (

    <>
      <TextField />
      <div className={styles.counterWrapper}>
        <span className={styles.coutner}>{timer}</span>
        <button className={styles.resetButton} onClick={() => setTimer(180)}>Re-send OTP</button>
      </div>
    </>


  );
};

export default OtpName;