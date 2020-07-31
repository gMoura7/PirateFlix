import styled from 'styled-components';

export const CategoryInput = styled.input`
    display: block;
    color: white;
    outline: none;
    width: 100%;
    height: 48px;
    padding: 12px 8px 0;
    margin-top: 25px;
    margin-bottom: 5px;
    border: none;
    border-radius: 4px;
    background: #53585D;
    font-size: 16px;

    & + label {
        pointer-events: none;
        position: absolute;
        top: 0%;
        padding: 14px 14px;
        font-size: 16px;
        transition: 0.2s;
    }

    &:focus + label, &:valid + label {
        padding: 8px 8px;
        font-size: 12px;
        line-height: 8px;
    }
    
    &[type="color"]::-webkit-color-swatch-wrapper{
        padding-top: 12px;
        border-radius: 4px;
    }
    &[type="color"]::-webkit-color-swatch{
        border-radius: 4px;
        border: none;
    }
    &[type="color"] + label {
        top: 5.75%;
        bottom: 68.97%;
    }
    
    &:invalid {
        border-bottom: 2px solid red;
    }

    &:focus {
        border-bottom: 2px solid var(--primary);
    }

`;

export const Container = styled.div`
    position: relative;

    span {
        color: red;
        display: none;
    }

    input:invalid ~ span, textarea:invalid ~ span{
        display: block;
    }
`;