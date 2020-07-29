import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  
  &:not(:first-child) {
    margin-left: 20px;
    width: 298px;
  }
`;

export const VideoCardTextLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;

`;

export const VideoDiv = styled.div`
  text-align: center;
  padding: 0;
  width: 298px;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  `;