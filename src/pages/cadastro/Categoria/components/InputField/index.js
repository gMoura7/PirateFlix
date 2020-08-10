import React from 'react';
import PropTypes from 'prop-types';

import { CategoryInput, Container } from './styles';

function InputField(props) {
  const { inputProps, labelProps } = props;
  const hasValue = Boolean(inputProps.value.length);

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
        hasValue={hasValue}
        list={`suggestion_${inputProps.name}`}
      />
      <label htmlFor={inputProps.name}>{ labelProps.label }</label>
      { labelProps.requiredMessage && (
        <span>{ labelProps.requiredMessage }</span>
      )}
      {inputProps.suggestions && (
      <datalist id={`suggestion_${inputProps.name}`}>
        {
          inputProps.suggestions.map((suggestion) => (
            <option key={`suggestion_${inputProps.name}_${suggestion}`} value={suggestion}>{suggestion}</option>))
        }
      </datalist>
      )}
    </Container>
  );
}

InputField.defaultProps = {
  inputProps: PropTypes.shape({
    as: 'input',
    type: 'text',
    value: '',
    onChange: () => {},
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
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    suggestions: PropTypes.arrayOf(PropTypes.string),
  }),

  labelProps: PropTypes.shape({
    label: PropTypes.string,
    requiredMessage: PropTypes.string,
    submitted: PropTypes.bool,
  }),
};

export default InputField;
