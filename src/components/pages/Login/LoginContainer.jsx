// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FormButton, FormInput } from '../../common';
// import { submitLogin } from '../../../api';

const LoginContainer = () => {
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clickHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // try {
    //   await submitLogin({
    //     username: userEmail,
    //     password: userPassword,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    // setIsSubmitting(false);
  };

  const inputHandler = (input) => {
    const userInput = input.target;
    if (userInput.name === 'Email') {
      setUserEmail(userInput.value);
    } else if (userInput.name === 'Password') {
      setUserPassword(userInput.value);
    }
    // now you can grab the token and do whatever you need with it.
    // console.log(accessToken)
  };

  return (
    <form>
      <FormInput
        placeholder="User Name"
        labelId="Email"
        value={userEmail}
        handleInput={inputHandler}
      />
      <FormInput
        placeholder="Password"
        labelId="Password"
        value={userPassword}
        handleInput={inputHandler}
      />
      <FormButton
        handleButtonClick={clickHandler}
        classType="primary"
        buttonText="Click"
        isDisabled={isSubmitting}
      />
    </form>
  );
};

export default LoginContainer;
