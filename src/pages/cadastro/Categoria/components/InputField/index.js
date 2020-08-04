import React from 'react';
import PropTypes from 'prop-types';

import { CategoryInput, Container } from './styles';

function InputField(props) {
  const { inputProps, labelProps } = props;

  return (
    <Container>
      <CategoryInput
        as={inputProps.as}
        onChange={inputProps.onChange}
        type={inputProps.type}
        name={inputProps.name}
        value={inputProps.value}
        required={inputProps.required}
        style={inputProps.style}
      />
      <label htmlFor={inputProps.name}>{ labelProps.label }</label>
      { labelProps.requiredMessage && labelProps.submitted && (
        <span>{ labelProps.requiredMessage }</span>
      )}
    </Container>
  );
}

InputField.defaultProps = {
  inputProps: PropTypes.shape({
    as: 'input',
    required: false,
    style: {},
  }),
  labelProps: PropTypes.shape({
    label: 'Campo de entrada',
    requiredMessage: 'Este campo precisa estar preenchido',
    submitted: true,
  }),
};

InputField.propTypes = {
  inputProps: PropTypes.shape({
    as: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    style: PropTypes.object,
  }),

  labelProps: PropTypes.shape({
    label: PropTypes.string,
    requiredMessage: PropTypes.string,
    submitted: PropTypes.bool,
  }),
};

export default InputField;
