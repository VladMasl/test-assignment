import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import s from './FormRegistration.module.scss';
const FormRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [chek, setChek] = useState('');

 
  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'chek':
        setChek(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    //   dispatch(register({ name, email, password }));
    console.log(name);
    console.log(chek);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <section className={s.registration}>
      <h2 className={s.title}>Working with POST request</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </label>
        <p>Choose a color:</p>
        <label>
          <input
            type="radio"
            label="third radio"
            name="red"
            value='hfhff'
            onChange={handleInputChange}
          />
          Red
        </label>
        <label>
          <input
            type="radio"
            label="third radio"
            name="re"
            value='chg'
            onChange={handleInputChange}
          />
          455
        </label>
        <label>
          <input
            type="radio"
            label="third radio"
            name="re"
            value='red'
            onChange={handleInputChange}
          />
          fgdgd
        </label>

       

        <button type="submit" className={s.btn}>
          Sign up
        </button>
      </form>
    </section>
  );
};

export default FormRegistration;
