import TextField from './components/TextField/TextField'
import Button from './components/Button/Button'
import PhoneNumber from './components/PhoneNumber/PhoneNumber'
import OtpName from './components/OtpName/OtpName'
import Wrapper from './components/Wrapper/Wrapper'
import { useState } from 'react';

const App = () => {

  const [phoneNumber, SetPhone] = useState('');
  const [otpNumber, setOtpNumber] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const onClick = () => {
    setShowOtp(true);
  }

  return (
    <Wrapper>
      <h1>sign in to your account</h1>
      <PhoneNumber value={phoneNumber} onChange={e => SetPhone(e.target.value)} setShowOtp={setShowOtp} showOtp={showOtp}/>
      {showOtp && (
        <OtpName value={otpNumber} onChange={e => setOtpNumber(e.target.value)}/>
      )}
      <Button disabled={!phoneNumber.length} onClick={onClick} />
    </Wrapper>
  );
};

export default App;