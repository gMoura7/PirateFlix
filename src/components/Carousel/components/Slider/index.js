/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import { Container } from './styles'

function Arrow(props) {
  const { className, style, onClick, arrowColor } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: arrowColor }}
      onClick={onClick}
    />
  );
}

function Slider({ children, category }) {
  return (
    <Container>
      <SlickSlider {...{
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: <Arrow className="slick-next" arrowColor={category.cor} />,
        prevArrow: <Arrow className="slick-prev" arrowColor={category.cor} />
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  )
}

export default Slider; 