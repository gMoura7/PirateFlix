import React from 'react';
import { CategoryInput, Container } from './styles';

function InputField(props) {
    return (
        <Container>
            <CategoryInput { ...props } />
            <label htmlFor={ props.name }>{ props.label }</label>
        </Container>
    )
}

export default InputField;