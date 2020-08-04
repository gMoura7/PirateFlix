import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

import Main from './styles';

function PageDefault(props) {
  const { homepage, children } = props;

  return (
    <>
      <Menu />
      {/* Operador ternário abaixo, se tiver homepage nos props, devolve somente children
                    Caso contrario, retorna children envelopados pela tag Main. */}
      {homepage ? (
        <>
          {children}
        </>
      )
        : (
          <Main>
            {children}
          </Main>
        )}
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  homepage: false,
};

PageDefault.propTypes = {
  homepage: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default PageDefault;
