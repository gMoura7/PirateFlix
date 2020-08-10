import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../../assets/img/Logo.png';
import './index.css';
import Button from './Button';

function Menu({ newCategory }) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PirateFlix logo" />
      </Link>
      { newCategory
        ? (
          <Button as={Link} to="/cadastro/categoria" className="ButtonLink">
            Nova categoria
          </Button>
        ) : (
          <Button as={Link} to="/cadastro/video" className="ButtonLink">
            Novo Video
          </Button>
        )}
    </nav>
  );
}

Menu.defaultProps = {
  newCategory: false,
};

Menu.propTypes = {
  newCategory: PropTypes.bool,
};

export default Menu;
