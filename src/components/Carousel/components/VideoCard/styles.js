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
  transition: opacity .3s;
  
  &:not(:first-child) {
    margin-left: 20px;
    width: 298px;
  }
`;

export const VideoCardTitle = styled.span`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  left:  0.75%;
  right: 0.75%;
  bottom: 10%;
  font-size: 16px;
  transition: opacity 0.3s;
  transition: background 0.3s;
  text-align: center;
`;

export const VideoDiv = styled.div`
  position: relative;
  text-align: center;
  padding: 0;
  width: 298px;
  
  &:hover > a,
  &:focus > a {
    opacity: 0.5;
  }

  &:hover > span,
  &:focus > span {
    opacity: 1;
    background: rgba(0,0,0,0.6);
  }
  `;