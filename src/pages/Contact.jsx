import { useState } from "react";

import { validateEmail } from '../utils/validateForm';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'message') {
    setMessage(inputType);
  }
};

  const handleFormSubmit = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
  
      // If successful, we want to clear out the input after registration.
      setName('');
      // TODO: Set the password back to an empty string after the user clicks submit
      setEmail('');
  
      setMessage('');
}

    return (
      <div>
        <h2>Contact</h2>
        <form className="form" onSubmit= {handleFormSubmit}>
          <input
            value = {name}
            name = "name"
            onChange={handleInputChange}
            type="name"
            placeholder = "name" 
          />
          <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          />
          <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
         <button type="submit">
          Submit
        </button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}
      </div>
    );
  }
