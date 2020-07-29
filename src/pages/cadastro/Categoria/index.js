import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CadastrarCategoria = () => {
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <Link to="/">
          Ir pra Home
        </Link>
      </PageDefault>
    )
  }

export default CadastrarCategoria;