import React from 'react';
import PropTypes from 'prop-types';

import InputMask from 'react-input-mask';

const PhoneInput = (props) => {
  const { onInputChange, ...inputProps } = props;
  return (
    <InputMask
      onChange={onInputChange}
      mask="+7 (\999) 999-99-99"
      alwaysShowMask={true}
      {...inputProps}
    />
  );
};

PhoneInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PhoneInput;
