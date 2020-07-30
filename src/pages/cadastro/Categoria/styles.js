import styled from 'styled-components';

export const Button = styled.button`
    width: 180px;
    margin: 28px 48px 28px 0;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;