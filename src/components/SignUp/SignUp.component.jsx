import React, { useState } from 'react';
import { auth } from '../../configs/firebase.config';
import styled  from 'styled-components';
import Button from '@material-ui/core/Button';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignUp = e => {
    e.preventDefault();

    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => console.log(user))
        .catch(err => console.error(err));
    } else {
      alert('Password do not match');
    }
  };
  
      
 

  return (
    <Sign className="sign-up">
      <h1 className="heading" >Sign Up page</h1>
      <form>
        <input className="space"
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input className="space"
          type="password"
          placeholder="Password should be of atleast 8 digits"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input className="space"
          type="password"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <Button variant="contained" color="primary" className="spaceb" onClick={handleSignUp}>Sign Up</Button>
        
      </form>
    </Sign>
  );
};

export default SignUp;

const Sign = styled.div`
margin-top:100px;
.heading{
 font-size:50px;
 color:green; 
}
.space{
  margin-left:50px;
  width:300px;
  height:25px;
}
.spaceb{
  margin-left:50px;
  
}
`;