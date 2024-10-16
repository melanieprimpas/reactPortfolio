import { useState } from "react";

import { validateEmail } from '../utils/validateForm';

const styles = {
  textarea: {
    width: '500px',
    height: '250px'
  },
  input: {
    width: '500px',
  }
}
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBlur = (inputValue) => {
    if (!inputValue) {
        setErrorMessage('This field is required.');
    } else {
        setErrorMessage('');
    }
};

  const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else {
    setMessage(inputValue);
  }
};

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
     
    }
    
    if (name === "") {
      setErrorMessage('Name is required');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
     
    }
    if (message === "") {
      setErrorMessage('Message is required');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
     
    }
  
      // If successful, we want to clear out the input after registration.
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
}

    return (
      <div>
        <h2>Contact</h2>
        <form className="form" onSubmit= {handleFormSubmit}>
          <h3>Name:</h3>
          <input style ={styles.input}
            value = {name}
            name = "name"
            onChange={handleInputChange}
            onBlur={() => handleBlur(name)} 
            type="text"
            placeholder = "name" 
          />
          <h3>Email:</h3>
          <input style ={styles.input}
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={() => handleBlur(email)} 
          type="email"
          className={errorMessage && !validateEmail(email) ? 'is-invalid' : ''}
          placeholder="email"
          />
          <h3>Message:</h3>
          <textarea style = {styles.textarea}
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={() => handleBlur(message)} 
          placeholder="message"
        />
         <button type="submit">
          Submit
        </button>
        </form>
        <div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
        
      </div>
    );
  }
