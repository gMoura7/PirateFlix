import styled, { keyframes } from 'styled-components';

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

// Create the keyframes
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width:  100px;
  height: 100px;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;

export const SpinnerWrapper = styled.div`
  width: 16.67vh;
  height: 16.67vh;
  margin: auto;
`;
