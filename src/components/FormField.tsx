import  { useState } from 'react'

export function FormField() {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSubscribe() {
    if (!email) {
      setErrorMsg('Please enter your email address');
    } else {
      setErrorMsg('')
    }
  }

  return (
    <div className="form-field">
      <div className='form-field-input'>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubscribe}>Subscribe</button>
      </div>
     <div className='form-error'>
     {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
     </div> 
    </div>
  );
}


