import React from 'react';
import PageDefault from '../../components/PageDefault'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NotFound = () => {
    return(
      <PageDefault>
        <h1>Erro 404</h1>
        <p>Página não encontrada</p>
        <Link to="/">
          Ir pra Home
        </Link>
      </PageDefault>
    )
  }

export default NotFound;