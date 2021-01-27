import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from '../phone-input/phone-input';

import './form.scss';

const Form = ({ onChangeFormStatus }) => {
  const [phone, setPhone] = useState('');
  const [isDisable, setDisable] = useState(true);

  const inputChangeHandler = ({ target }) => {
    const newPhone = target.value.replace(/\D+/g, '');
    setPhone(newPhone);

    if (newPhone.length <= 10) {
      setDisable(true);
      return;
    }

    setDisable(false);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    setPhone('');
    onChangeFormStatus(true);
  };

  return (
    <form className="main-page__form form" onSubmit={formSubmitHandler} method="post" action="#">
      <p className="form__input-wrapper">
        <label className="form__label" htmlFor="phone">
          Телефон
        </label>
        <PhoneInput
          className="form__input"
          onInputChange={inputChangeHandler}
          type="tel"
          name="phone"
          id="phone"
          value={phone}
        />
      </p>
      <button className="form__submit button" type="submit" disabled={isDisable}>
        Заказать
      </button>
    </form>
  );
};

Form.propTypes = {
  onChangeFormStatus: PropTypes.func.isRequired,
};

export default Form;
